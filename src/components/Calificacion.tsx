export const Calificacion = ({ nombre, calificacion }: calificacionProps) => {
  if (calificacion > 90) {
    return <h3>{nombre}: Excelente calificacion</h3>;
  } else if (calificacion >= 80 && calificacion <= 90) {
    return <h3>{nombre}: Muy bien hecho</h3>;
  } else {
    return <h3>{nombre}: lol...</h3>;
  }
};

interface calificacionProps {
  nombre: string;
  calificacion: number;
}
