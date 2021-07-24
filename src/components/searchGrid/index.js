import React from "react";
import "./style.css";
import Card from "../card";
import NoMatch from "../noMatch";

const SearchGrid = ({ searchedData, searchTerm }) => {
  return searchedData.length > 1 ? (
    <div className="searchGrid">
      {searchedData.map((item) => {
        return (
          <Card
            productImage={item.productImg}
            productName={item.productName}
            price={item.price}
            off={item.off}
            productDes={item.desc}
            rating={item.rating}
            outOfStock={item.outOfStock}
            wishlist={item.wishlist}
            imgHeight={item.imgHeight}
            id={item._id}
            fast={item.fastDelivery}
            quantity={item.quantity}
          />
        );
      })}
    </div>
  ) : (
    <NoMatch searchTerm={searchTerm} />
    // <p className="noResult">Sorry No Result for "{searchTerm}"</p>
  );
};

export default SearchGrid;
