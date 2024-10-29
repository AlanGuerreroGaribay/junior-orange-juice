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
        <div className="flex justify-center items-center w-full mb-4">
          <h3 className="text-orange font-bold  text-center mr-4">
            {`${copied ? "Copiado! " : "Copiar "}: ${folio}`}
          </h3>
          <svg
            onClick={copyToClipboard}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 fill-red-500 cursor-pointer hover:opacity-35"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
            />
          </svg>
        </div>
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
