import React, { ReactElement } from "react";
import { MostrarTexto } from "./MostrarTexto";

export const Propiedades = (props: propiedadesProps) => {
  return (
    <div>
      <h1>Propiedades</h1>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano.toString()}</li>
        <li>{props.arreglo.join(", ")}</li>
        <li>{props.objeto.curso + " - " + props.objeto.donde}</li>
        <li>{props.arreglo.map(props.funcion).join(", ")}</li>
        <li>{props.elementoReact}</li>
        <li>
          {props.componenteReact ? (
            props.componenteReact
          ) : (
            <MostrarTexto texto="No se ha pasado ningún componente" />
          )}
        </li>
      </ul>
    </div>
  );
};

Propiedades.defaultProps = {
  elementoReact: <i>valor por defecto</i>,
};

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
