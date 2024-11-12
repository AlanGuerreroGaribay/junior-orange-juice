import React from "react";

// eslint-disable-next-line react/prop-types
export const SelectBox = ({ name, onChange }) => {
  return (
    <select name={name} onChange={onChange} className="input">
      <option value="">-- Seleccione una categoría --</option>
      <option value="U14 nacidos 2010 y 2011 femenil">
        U14 nacidos 2010 y 2011 femenil{" "}
      </option>
      <option value="U14 nacidos 2010 y 2011 varonil">
        U14 nacidos 2010 y 2011 varonil{" "}
      </option>
      <option value="U12 nacidos 2012 y 2014 femenil ">
        U12 nacidos 2012 y 2014 femenil{" "}
      </option>
      <option value="U12 nacidos 2012 y 2014 varonil">
        U12 nacidos 2012 y 2014 varonil{" "}
      </option>
    </select>
  );
};
