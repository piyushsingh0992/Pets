import React from "react";
import "./wishlistGrid.css";

import Card from "../card";
import { useWishlist } from "../../contexts/wishlistContext/wishlistContext.js";
import { useCart } from "../../contexts/cartContext/cartContext.js";
import EmptyWishlist from "../emptyWishlist";
import { addedToCart } from "../../utils/common.js";
const WishlistGrid = () => {
  const { wishlistState } = useWishlist();
  const { cartState } = useCart();

  const filteredData = addedToCart(wishlistState, cartState);

  return (
    <>
      {wishlistState.length > 0 ? (
        <div className="wishlistGrid">
          {filteredData.map((item) => {
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
        <EmptyWishlist />
      )}
    </>
  );
};

export default WishlistGrid;
