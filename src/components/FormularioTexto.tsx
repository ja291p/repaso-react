import React from "react";

export const FormularioTexto = ({ manejadorKeyUp }: formularioTextoProps) => {
  return (
    <input
      type="text"
      onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) =>
        manejadorKeyUp(e.currentTarget.value)
      }
    />
  );
};

interface formularioTextoProps {
  manejadorKeyUp(txt: string): void;
}
