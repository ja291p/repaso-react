import React from "react";

export const Botonera = ({ limit, setOffset }: botoneraProps) => {
  const handleAnterior = () =>
    setOffset((offset) => (offset > 0 ? offset - limit : offset));

  const handleSiguiente = () => setOffset((offset) => offset + limit);

  return (
    <div className="botonera">
      <button className="btn btn-primary" onClick={handleAnterior}>
        anterior
      </button>
      <button className="btn btn-primary" onClick={handleSiguiente}>
        siguiente
      </button>
    </div>
  );
};

interface botoneraProps {
  limit: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
}
