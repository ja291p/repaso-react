export const GridPokemonItem = ({ name, image }: gridPokemonItemProps) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
};

interface gridPokemonItemProps {
  name: string;
  image: string;
}
