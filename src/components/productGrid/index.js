import React from "react";
import "./productGrid.css";
import Card from "../card";

const ProductGrid = ({ productData, filterdispatch }) => {
  return (
    <div className="productGrid">
      {productData.map((item) => {
        return (
          <Card
            quantity={item.quantity}
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
            filterdispatch={filterdispatch}
          />
        );
      })}
    </div>
  );
};

export default ProductGrid;
