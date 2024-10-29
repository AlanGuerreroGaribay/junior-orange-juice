// eslint-disable-next-line react/prop-types
export const FormInput = ({ name, value, onChange, placeholder, error }) => {
  return (
    <div>
      <input
        name={name}
        disabled={name === "Categoria" ? true : false}
        value={value}
        onChange={onChange}
        placeholder={placeholder === "Categoria" ? "12-14 años" : placeholder}
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
