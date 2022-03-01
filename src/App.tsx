import { useState } from "react";
import { Botonera } from "./components/Botonera";
import { GridPokemon } from "./components/GridPokemon";
import "./estilo.css";

function App() {
  const limit = 20;
  const [offset, setOffset] = useState(0);

  return (
    <>
      <h1>Pokemons</h1>
      <Botonera limit={limit} setOffset={setOffset} />
      <GridPokemon limit={limit} offset={offset} />
    </>
  );
}

export default App;
