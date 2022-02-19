import React from "react";

export const ContenidoDinamico = ({
  nombre,
  calificacion,
}: contenidoDinamicoProps) => {
  if (calificacion > 90) {
    return <h2>{nombre}: Excelente calificación</h2>;
  } else if (calificacion >= 80 && calificacion <= 90) {
    return <h2>{nombre}: Muy bien hecho</h2>;
  } else {
    return <h2>{nombre}: lol...</h2>;
  }
};

interface contenidoDinamicoProps {
  nombre: string;
  calificacion: number;
}
