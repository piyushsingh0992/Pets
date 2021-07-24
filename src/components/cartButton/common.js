import plus from "../../utils/images/icons/plus.svg";
import minus from "../../utils/images/icons/minus.svg";
import {
  quantityManagerInCart,
  addToCart,
} from "../../utils/cartFunctions/cartFunctions.js";

import Button from "../button";

export function cardCartButton(
  id,

  quantity,
  toastDispatch,
  cartDispatch,
  language,
  theme
) {
  return quantity > 0 ? (
    <div className="card-quantity-handler">
      <img
        src={minus}
        onClick={() => {
          quantityManagerInCart(cartDispatch, "DECREASE", id, toastDispatch);
        }}
      />

      <p style={{ color: theme.boldText }}>{quantity}</p>
      <img
        src={plus}
        onClick={() => {
          quantityManagerInCart(cartDispatch, "INCREASE", id, toastDispatch);
        }}
      />
    </div>
  ) : (
    <Button
      type="primary"
      text={language.addCart}
      clickFunction={() => {
        addToCart(cartDispatch, id, toastDispatch);
      }}
    />
  );
}

export function productPreviewCartButton(
  id,
  quantity,
  toastDispatch,
  cartDispatch,
  language,
  theme
) {
  return quantity > 0 ? (
    <div className="productPreviewQuantityHandler">
      <img
        src={minus}
        onClick={() => {
          quantityManagerInCart(cartDispatch, "DECREASE", id, toastDispatch);
        }}
      />
      <p style={{ color: theme.boldText }}>{quantity}</p>
      <img
        src={plus}
        onClick={() => {
          quantityManagerInCart(cartDispatch, "INCREASE", id, toastDispatch);
        }}
      />
    </div>
  ) : (
    <Button
      type="primary"
      text={language.addCart}
      size="product-preview-btn"
      clickFunction={() => {
        addToCart(cartDispatch, id, toastDispatch);
      }}
    />
  );
}

export function cartCartButton(
  id,
  quantity,
  toastDispatch,
  cartDispatch,
  language,
  theme
) {
  return (
    <div className="quantity-controls" style={{ color: theme.primaryText }}>
      {language.quantity}: &ensp;
      <img
        src={minus}
        onClick={() => {
          quantityManagerInCart(cartDispatch, "DECREASE", id, toastDispatch);
        }}
      />
      <p style={{ color: theme.boldText }}>{quantity}</p>
      <img
        src={plus}
        onClick={() => {
          quantityManagerInCart(cartDispatch, "INCREASE", id, toastDispatch);
        }}
      />
    </div>
  );
}
