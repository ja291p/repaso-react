import { GridGifItem } from "./GridGifItem";
import { useFetchGifs } from "./useFetchGifs";

export const GifGrid = ({ category }: gifGridProps) => {
  const { gifs, loading } = useFetchGifs(category);

  return (
    <>
      {loading ? (
        <h3>Cargando...</h3>
      ) : (
        <div>
          <h3>{category}</h3>
          <div className="card-grid">
            {gifs.map((gif: any) => (
              <GridGifItem key={gif.id} {...gif} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

interface gifGridProps {
  category: string;
}
