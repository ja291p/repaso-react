export const GridGifItem = ({ title, image }: gridGifItemProps) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
};

interface gridGifItemProps {
  title: string;
  image: string;
}
