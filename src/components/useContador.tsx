import { useState } from "react";

export const useContador = (initialValue: number = 0) => {
  const [counter, setContador] = useState(initialValue);

  const increment = () => setContador(counter + 1);
  const decrement = () => setContador(counter - 1);
  const reset = () => setContador(initialValue);

  return { counter, increment, decrement, reset };
};
