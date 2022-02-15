import React from "react";
import { pokemon } from "./MirchaFetch";

export const PokemonCard = ({ name, image }: pokemon) => {
  return (
    <figure className="pokemon">
      <img src={image} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
};
