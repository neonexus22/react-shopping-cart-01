import React from "react";

const Rating = ({ rating, numReviews }) => {
  return (
    <div className="rating">
      {Array(Math.floor(rating))
        .fill("")
        .map((r, i) => (
          <span key={i}>
            <i className="fa fa-star"></i>
            {/* <i
              className={
                rating >= 1
                  ? "fa fa-star"
                  : rating >= 0.5
                  ? "fa fa-start-half-o"
                  : "fa fa-star-o"
              }
            ></i>
            <i
              className={
                rating >= 2
                  ? "fa fa-star"
                  : rating >= 1.5
                  ? "fa fa-start-half-o"
                  : "fa fa-star-o"
              }
            ></i> */}
          </span>
        ))}
      <span>{`${numReviews} reviews`}</span>
    </div>
  );
};

export default Rating;
