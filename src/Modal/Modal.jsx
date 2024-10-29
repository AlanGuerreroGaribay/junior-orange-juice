import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const Modal = ({ folio, isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(folio).then(() => {
      setCopied(true);
    });
  };

  const closeHandler = () => {
    setCopied(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-80 transform transition-transform duration-300 ease-out opacity-0 translate-y-[-50%] animate-modalSlide">
        <h2 className="text-xl font-semibold text-orange-600 mb-4">
          Registro Exitoso!
        </h2>
        <p className="text-gray-700 mb-4">Tu número de folio es: </p>
        <h3
          onClick={copyToClipboard}
          className="text-orange font-bold w-full text-center mb-4 cursor-pointer hover:opacity-35"
        >
          {`${copied ? "Copiado! " : "Copiar "}: ${folio}`}
        </h3>
        <p className="text-sm mb-4">
          Por favor, realiza el depósito usando el número de folio como
          referencia y envía los detalles por correo a María.
        </p>
        <p className=" mb-4 text-red-500 text-lg font-bold">
          Es necesario que copies tu folio antes de cerrar el aviso!
        </p>
        <button
          onClick={closeHandler}
          className="w-full bg-green  text-white py-2 rounded mt-4"
        >
          Aceptar!
        </button>
      </div>
    </div>
  );
};
