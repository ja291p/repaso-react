import React from "react";

export const MostrarTexto = ({ texto }: mostrarTextoProps) => {
  return <h3>{texto}</h3>;
};

MostrarTexto.defaultProps = {
  texto: "valor por defecto",
};

interface mostrarTextoProps {
  texto: string;
}
