import React, { useEffect, useState } from "react";
import { PokemonCard } from "./PokemonCard";
import "./pokemon.css";

export const MirchaFetch = () => {
  const limit = 5;
  const [offset, setOffset] = useState(0);
  const [pokemones, setPokemones] = useState<pokemon[]>([]);

  useEffect(() => {
    setPokemones([]);
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    fetch(url)
      .then((resp) => resp.json())
      .then(({ results }) => {
        results.forEach((result: any) => {
          fetch(result.url)
            .then((resp) => resp.json())
            .then(({ name, sprites: { front_default } }) => {
              setPokemones((pokemones) => [
                ...pokemones,
                { name, image: front_default },
              ]);
            })
            .catch(console.log);
        });
      })
      .catch(console.log);
  }, [offset]);

  return (
    <>
      <div>
        <button
          disabled={offset === 0}
          className="btn btn-outline-primary"
          onClick={() => setOffset(offset - limit)}
        >
          Anterior
        </button>
        &nbsp;
        <button
          className="btn btn-outline-primary"
          onClick={() => setOffset(offset + limit)}
        >
          Siguiente
        </button>
      </div>
      <div className="pokemones">
        {pokemones.length === 0 ? (
          <h2>Cargando...</h2>
        ) : (
          pokemones.map((pokemon) => (
            <PokemonCard key={pokemon.name} {...pokemon} />
          ))
        )}
      </div>
    </>
  );
};

export interface pokemon {
  name: string;
  image: string;
}
