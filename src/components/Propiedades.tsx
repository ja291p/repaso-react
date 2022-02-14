import React, { ReactElement } from "react";
import { Reloj } from "./Reloj";

const Propiedades = (props: propiedadesProps) => {
  return (
    <div>
      <h1>Propiedades</h1>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{JSON.stringify(props.booleano)}</li>
        <li>{props.arreglo.join(", ")}</li>
        <li>{props.objeto.curso + " - " + props.objeto.donde}</li>
        <li>{props.arreglo.map(props.funcion).join(", ")}</li>
        <li>{props.elementoReact}</li>
        <li>{props.componenteReact ? props.componenteReact : <Reloj />}</li>
      </ul>
    </div>
  );
};

export default Propiedades;

interface propiedadesProps {
  cadena: string;
  numero: number;
  booleano: boolean;
  arreglo: number[];
  objeto: { curso: string; donde: string };
  funcion(num: number): number;
  elementoReact: ReactElement;
  componenteReact?: ReactElement;
}

Propiedades.defaultProps = {
  elementoReact: <i>valor por defecto</i>,
};
