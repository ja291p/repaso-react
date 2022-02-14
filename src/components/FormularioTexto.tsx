import React from "react";

const FormularioTexto = ({ handleKeyUp }: formularioTextoProps) => {
  return (
    <div>
      <input
        type="text"
        onKeyUp={(e) => handleKeyUp(e.currentTarget.value)}
        name="ejemplo"
      />
    </div>
  );
};

export default FormularioTexto;

interface formularioTextoProps {
  handleKeyUp(s: string): void;
}
