import React from "react";

export const ProductCard = ({
  name,
  image,
  description,
  price,
}: productCardProps) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img
          src={image}
          className="card-img-top"
          style={{ width: "75%", height: "200px" }}
          alt={name}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer">
          <a href="/" className="btn btn-primary">
            {price} €
          </a>
        </div>
      </div>
    </div>
  );
};

interface productCardProps {
  name: string;
  image: string;
  description: string;
  price: number;
}
