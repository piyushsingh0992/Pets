import React from "react";
import "./style.css";
function Rating({ rating }) {
  const ratingHandler = (rating) => {
    let finalRating = [];
    if (rating > 5) {
      return [
        <span className="fa fa-star checked"></span>,
        <span className="fa fa-star checked"></span>,
        <span className="fa fa-star checked"></span>,
        <span className="fa fa-star checked"></span>,
        <span className="fa fa-star checked"></span>,
      ];
    }

    if (rating < 0) {
      return [
        <span className="fa fa-star "></span>,
        <span className="fa fa-star "></span>,
        <span className="fa fa-star "></span>,
        <span className="fa fa-star "></span>,
        <span className="fa fa-star "></span>,
      ];
    }
    for (let i = 0; i < rating; i++) {
      finalRating.push(<span className="fa fa-star checked"></span>);
    }

    for (let i = 0; i < 5 - rating; i++) {
      finalRating.push(<span className="fa fa-star "></span>);
    }

    return finalRating;
  };
  return (
    <div className="card-rating">
      {ratingHandler(rating).map((item) => item)}
    </div>
  );
}

export default Rating;
