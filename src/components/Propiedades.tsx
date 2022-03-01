import React, { ReactElement } from "react";

export const Propiedades = (props: propiedadesProps) => {
  return (
    <div>
      <h2>Propiedades</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano.toString()}</li>
        <li>{props.arreglo.join(", ")}</li>
        <li>
          {props.objeto.curso} - {props.objeto.donde}
        </li>
        <li>{props.arreglo.map(props.funcion).join(", ")}</li>
        <li>{props.elementoReact}</li>
        <li>
          {props.componenteReact ? (
            props.componenteReact
          ) : (
            <h5>No se ha pasado ningún componente</h5>
          )}
        </li>
      </ul>
    </div>
  );
};

Propiedades.defaultProps = {
  elementoReact: <i>Elemento por defecto</i>,
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
