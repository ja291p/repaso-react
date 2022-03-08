import { useEffect, useState } from "react";
import { getGifs } from "./getGifs";

export const useFetchGif = (category) => {
  const [state, setState] = useState({ data: [], loading: true });

  useEffect(() => {
    getGifs(category).then((gifs) => setState({ data: gifs, loading: false }));
  }, [category]);

  return state;
};
