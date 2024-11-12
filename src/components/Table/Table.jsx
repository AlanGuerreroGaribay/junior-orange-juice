export const Table = () => {
  return (
    <div className="w-full flex justify-center my-8 ">
      <table className="md:w-full bg-white border border-gray-300 rounded-lg shadow-lg">
        <thead>
          <tr>
            <th className="text-[10px] md:text-lg px-1 py-0 md:py-3 border-b border-gray-300 bg-gray-100 text-left text-gray-700 font-semibold uppercase tracking-wider">
              Información Bancaria
            </th>
            <th className="text-[10px] md:text-lg px-1 py-0 md:py-3 border-b border-gray-300 bg-gray-100 text-left text-gray-700 font-semibold uppercase tracking-wider">
              Detalles
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-[11px] md:text-lg px-1 py-1 md:py-3 border-b border-gray-300 text-gray-700 font-bold">
              Banco
            </td>
            <td className="text-[11px] md:text-lg px-1 py-1 md:py-3 border-b border-gray-300 text-gray-900">
              HSBC
            </td>
          </tr>
          <tr>
            <td className="text-[11px] md:text-lg px-1 py-1 md:py-3 border-b border-gray-300 text-gray-700 font-bold">
              Beneficiario
            </td>
            <td className="text-[11px] md:text-lg px-1 py-1 md:py-3 border-b border-gray-300 text-gray-900">
              MARKA SPORTS AND ENTERTAINMENT GROUP SA DE CV
            </td>
          </tr>
          <tr>
            <td className="text-[11px] md:text-lg px-1 py-1 md:py-3 border-b border-gray-300 text-gray-700 font-bold">
              Cuenta
            </td>
            <td className="text-[11px] md:text-lg px-1 py-1 md:py-3 border-b border-gray-300 text-gray-900">
              4043945237
            </td>
          </tr>
          <tr>
            <td className="text-[11px] md:text-lg px-1 py-1 md:py-3 border-b border-gray-300 text-gray-700 font-bold">
              CLABE
            </td>
            <td className="text-[11px] md:text-lg px-1 py-1 md:py-3 border-b border-gray-300 text-gray-900">
              021320040439452375
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
