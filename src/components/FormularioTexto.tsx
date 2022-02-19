import React from "react";

export const FormularioTexto = ({ manejadorKeyUp }: formularioTextoProps) => {
  return (
    <div>
      <input onKeyUp={(e) => manejadorKeyUp(e.currentTarget.value)} />
    </div>
  );
};

interface formularioTextoProps {
  manejadorKeyUp(texto: string): void;
}
