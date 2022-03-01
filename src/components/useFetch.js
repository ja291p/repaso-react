import { useEffect, useState } from "react";
import { getPokemons } from "./getPokemons";

export const useFetch = (limit, offset) => {
  const [state, setState] = useState({ data: [], loading: true });

  useEffect(() => {
    getPokemons(limit, offset).then((pokemons) => {
      setState({ data: pokemons, loading: false });
    });
  }, [limit, offset]);

  return state;
};

// const [state, setState] = useState({ data: [], loading: true });

// useEffect(() => {
//   setState({ data: [], loading: true });
//   const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
//   fetch(url)
//     .then((resp) => resp.json())
//     .then((data) => {
//       data.results.map((result) =>
//         fetch(result.url)
//           .then((resp) => resp.json())
//           .then((value) => {
//             setState((prevState) => {
//               return {
//                 ...prevState,
//                 data: [
//                   ...prevState.data,
//                   {
//                     id: value.id,
//                     name: value.name,
//                     image: value.sprites.front_default,
//                   },
//                 ],
//               };
//             });
//           })
//       );
//     });
//   setState((prevState) => {
//     return { ...prevState, loading: false };
//   });
// }, [limit, offset]);

// return state;
