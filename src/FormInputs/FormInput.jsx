// eslint-disable-next-line react/prop-types
export const FormInput = ({ name, value, onChange, placeholder, error }) => {
  return (
    <div>
      <input
        name={name}
        disabled={name === "Categoria" ? true : false}
        value={name === "Edad" && value < 0 ? 0 : value}
        onChange={onChange}
        placeholder={placeholder === "Categoria" ? "12-14 años" : placeholder}
        type={name === "Edad" ? "number" : ""}
        className="input"
      />
      {error ? (
        <p className="text-xs mt-1 text-red-500">Falta llenar este campo!</p>
      ) : (
        <></>
      )}
    </div>
  );
};
