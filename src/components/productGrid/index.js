import React from "react";
import "./style.css";
import Card from "../card";
import { useTheme } from "../../contexts/themeContext";
import productError from "../../assets/images/icons/emptyWishlist.png";
const ProductGrid = ({ productData, filterdispatch }) => {
  const { theme } = useTheme();
  return productData.length > 0 ? (
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
  ) : (
    <div style={{ color: theme.primaryText }} className="no-product">
      <h1>Sorry No Product Found</h1>
      <img src={productError}/>
    </div>
  );
};

export default ProductGrid;
