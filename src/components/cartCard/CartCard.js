import React from "react";
import "./cartCard.css";
import Button from "../button/Button";
import Product from "./images/dogFood.jpg";
import plus from "./images/plus.svg";
import minus from "./images/minus.svg";
const CartCard = ({
  productImage,
  productName,
  price,
  removeFromCart,
  quantity,
}) => {
  return (
    <div className="cartCard">
      <div className="cartCard-details">
        <img src={Product} className="cartProduct-image" />
        <div className="cartProduct-details">
          
          <h2>Dog Food</h2>
          <p>Rs 1000</p>
          
          <div className="quantity-controls">
            <img src={minus} />
            <p>22</p>
            <img src={plus} />
          </div>
        </div>
      </div>
      <div className="cartCard-btn-container">
      <Button type="secondary" text="Remove from Cart"  size="cartCard-btn"/>
      </div>
    </div>
    // <div className="cartCard">
    //   <img src={productImage ? productImage : ""} className="cartProduct-image"/>
    //   <div className="cartProduct-details">
    //     <h1>{productName}</h1>
    //     <p>Rs {price}</p>
    //     <div className="quantity-controls">
    //       <img src={minus} />
    //       {quantity}
    //       <img src={plus} />
    //     </div>
    //     <Button type="secondary" text="Remove from Cart" clickFunction={removeFromCart}/>
    //   </div>
    // </div>
  );
};

export default CartCard;
