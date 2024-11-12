// eslint-disable-next-line react/prop-types
export const FormInput = ({ name, value, onChange, placeholder, error }) => {
  const placeHolderHandler = (stateName) => {
    let placeholder = "";
    switch (stateName) {
      case "Categoria":
        placeholder = "12-14 años";
        break;
      case "Pais":
        placeholder = "País (No disponible para Estados Unidos)";
        break;
      default:
        placeholder = stateName;
    }

    return placeholder;
  };

  const placeholderText = placeHolderHandler(placeholder);

  return (
    <>
      <input
        key={name}
        name={name}
        disabled={name === "Categoria" ? true : false}
        value={name === "Edad" && value < 0 ? 0 : value}
        onChange={onChange}
        placeholder={placeholderText}
        type={name === "Edad" ? "number" : ""}
        className="input"
      />
      {error ? (
        <p className="text-xs mt-1 text-red-500">Falta llenar este campo!</p>
      ) : (
        <></>
      )}
    </>
  );
};
