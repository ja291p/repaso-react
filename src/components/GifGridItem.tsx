import React from "react";

export const GifGridItem = ({ title, image }: gifGridItemProps) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
};

interface gifGridItemProps {
  title: string;
  image: string;
}
