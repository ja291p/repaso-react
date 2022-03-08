import { GifGridItem } from "./GifGridItem";
import { useFetchGif } from "./useFetchGif";

export const GifGrid = ({ category }: gifGridProps) => {
  const { data, loading } = useFetchGif(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && <h3>Cargando...</h3>}
      <div className="card-grid">
        {data && data.map((gif: any) => <GifGridItem key={gif.id} {...gif} />)}
      </div>
    </>
  );
};

interface gifGridProps {
  category: string;
}
