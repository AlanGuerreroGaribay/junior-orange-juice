import React from "react";
import { Link } from "react-router-dom";

const PrivacyAnnoucement = () => {
  return (
    <div className="min-h-screen flex flex-col items-center text-gray-800">
      <div className="p-6 w-full max-w-4xl my-6">
        <h3 className="mb-4 text-lg">
          <strong>Contrato de Confidencialidad</strong> para el Registro de
          Participación en el Torneo. {'"Wild Card Series México 2024"'}
        </h3>
        <ul className="ml-4 space-y-4">
          <li>
            <strong>1. Partes</strong> : Este contrato de confidencialidad{" "}
            {'("Contrato")'} se celebra entre Jobtennislatam{" "}
            {'(en adelante, "El Organizador")'} y el usuario del formulario de
            registro del torneo Wild Card Series México 2024{" "}
            {'(en adelante, "El Participante")'}.
          </li>
          <li>
            <strong>2. Propósito:</strong> El objetivo de este Contrato es
            proteger la información confidencial proporcionada por El
            Participante al registrarse en el torneo.
          </li>
          <li>
            <strong>3. Información Confidencial:</strong> Se considera{" "}
            {'"Información Confidencial"'}a todos los datos personales
            proporcionados en el formulario de registro, incluidos: nombre,
            apellido, edad, categoría, país, estado, correo electrónico y
            teléfono.
          </li>
          <li>
            <strong>4. Obligación de Confidencialidad:</strong> El Organizador
            se compromete a: Utilizar la Información Confidencial únicamente
            para los fines de organización, gestión y comunicación del torneo.
            No divulgar la Información Confidencial a terceros sin el
            consentimiento expreso de El Participante, salvo cuando sea
            requerido por ley o normativas aplicables.
          </li>
          <li>
            <strong>5. Protección de Datos:</strong> El Organizador implementará
            medidas razonables para proteger la Información Confidencial frente
            a accesos no autorizados, pérdida o divulgación indebida.
          </li>
          <li>
            <strong>6. Vigencia:</strong> Este Contrato de Confidencialidad
            entrará en vigor a partir del registro de El Participante y
            continuará vigente hasta la conclusión del torneo o hasta que El
            Participante autorice su divulgación específica.
          </li>
          <li>
            <strong>7. Aceptación:</strong> Al enviar el formulario de registro
            en esta página web, El Participante acepta los términos de este
            Contrato de Confidencialidad.
          </li>
        </ul>
        <div className="flex justify-center my-8">
          <Link
            to="/"
            className="w-1/3 bg-orange text-white font-semibold py-2 rounded-3xl mt-4 text-center"
          >
            Regresar al formulario
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyAnnoucement;
