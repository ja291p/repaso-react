import React from "react";

const ContenidoDinamico = ({
  nombre,
  calificacion,
}: contenidoDinamicoProps) => {
  if (calificacion > 90) {
    return <h3>{nombre}: Excelente calificación</h3>;
  } else if (calificacion >= 80 && calificacion <= 90) {
    return <h3>{nombre}: Muy bien hecho</h3>;
  } else {
    return <h3>{nombre}: lol... </h3>;
  }
};

export default ContenidoDinamico;

interface contenidoDinamicoProps {
  nombre: string;
  calificacion: number;
}
