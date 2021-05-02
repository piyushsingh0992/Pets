import React from "react";
import "./recommend.css";
import Card from "../card/Card.js";
import product from "./images/dogFood.jpg";
const Recommend = ({ text }) => {
  return (
    <div className="recommend-container">
      <div className="recommendation-heading">
      <h1>{text ? text : "Recommendation"}</h1>
      <p>See More</p>
      </div>
      <div className="recommend">
      <Card
          productImage={product}
          productName="Dog food"
          price={1000}
          off={10}
          productDes="dog eat this food"
          addToCart={() => {
            alert("added to cart");
          }}
          addToWishList={() => {
            alert("added to Wish list");
          }}
          removeFromWishList={() => {
            alert("removed from wish list");
          }}
          rating={2}
          
        />
        <Card
          productImage={product}
          productName="Dog food"
          price={1000}
          off={10}
          productDes="dog eat this food"
          addToCart={() => {
            alert("added to cart");
          }}
          addToWishList={() => {
            alert("added to Wish list");
          }}
          removeFromWishList={() => {
            alert("removed from wish list");
          }}
          rating={2}
          
        />
        ,
        <Card
          productImage={product}
          productName="Dog food"
          price={1000}
          off={10}
          productDes="dog eat this food"
          addToCart={() => {
            alert("added to cart");
          }}
          addToWishList={() => {
            alert("added to Wish list");
          }}
          removeFromWishList={() => {
            alert("removed from wish list");
          }}
          rating={4}
        />
        ,
        <Card
          productImage={product}
          productName="Dog food"
          price={1000}
          off={10}
          productDes="dog eat this food"
          addToCart={() => {
            alert("added to cart");
          }}
          addToWishList={() => {
            alert("added to Wish list");
          }}
          removeFromWishList={() => {
            alert("removed from wish list");
          }}
          rating={4}
        />
        ,
      </div>
    </div>
  );
};

export default Recommend;
