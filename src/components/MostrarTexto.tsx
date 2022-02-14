import React from "react";

export const MostrarTexto = ({ texto }: mostrarTextoProps) => {
  return <div>{texto}</div>;
};

interface mostrarTextoProps {
  texto: string;
}
