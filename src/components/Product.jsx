import React from "react";
import Rating from "./Rating";

const Product = ({
  product: { _id, name, image, price, rating, numReviews },
}) => {
  return (
    <div className="card">
      <a href={`/product/${_id}`}>
        <img className="medium" src={image} alt={name} />
      </a>
      <div className="card-body">
        <a href={`/product/${_id}`}>
          <h2>{name}</h2>
        </a>
        <Rating rating={rating} numReviews={numReviews} />
        <div className="price">$ {price}</div>
      </div>
    </div>
  );
};

export default Product;
