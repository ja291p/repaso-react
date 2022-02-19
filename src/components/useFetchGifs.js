import { useEffect, useState } from "react";
import { getGifs } from "./getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({ gifs: [], loading: true });

  useEffect(() => {
    getGifs(category).then((imgs) => setState({ gifs: imgs, loading: false }));
  }, [category]);

  return state;
};
