import { GridPokemonItem } from "./GridPokemonItem";
import pokemon from "./PokemonModel";
import { useFetch } from "./useFetch";

export const GridPokemon = ({ limit, offset }: gridPokemonProps) => {
  const { data: pokemones, loading } = useFetch(limit, offset);

  return (
    <>
      {loading ? (
        <h3>Cargando...</h3>
      ) : (
        <div className="card-grid">
          {pokemones.map((pok: pokemon) => (
            <GridPokemonItem key={pok.id} {...pok} />
          ))}
        </div>
      )}
    </>
  );
};

interface gridPokemonProps {
  limit: number;
  offset: number;
}
