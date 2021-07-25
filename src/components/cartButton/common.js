import plus from "../../assets/images/icons/plus.svg";
import minus from "../../assets/images/icons/minus.svg";
import {
  quantityManagerInCart,
  addToCart,
} from "../../utils/cartFunctions/cartFunctions.js";

import Button from "../button";
import MiniLoader from "../miniloader";
export function cardCartButton(
  id,
  quantity,
  toastDispatch,
  cartDispatch,
  language,
  theme,
  loader,
  loaderSetter,
  currentButton,
  currentButtonSetter
) {
  return quantity > 0 ? (
    <div className="card-quantity-handler">
      {loader && currentButton === "DECREASE" ? (
        <MiniLoader />
      ) : (
        <img
          src={minus}
          onClick={() => {
            currentButtonSetter("DECREASE");
            quantityManagerInCart(
              cartDispatch,
              "DECREASE",
              id,
              toastDispatch,
              loaderSetter
            );
          }}
        />
      )}
      <p style={{ color: theme.boldText }}>{quantity}</p>
      {loader && currentButton === "INCREASE" ? (
        <MiniLoader />
      ) : (
        <img
          src={plus}
          onClick={() => {
            currentButtonSetter("INCREASE");
            quantityManagerInCart(
              cartDispatch,
              "INCREASE",
              id,
              toastDispatch,
              loaderSetter
            );
          }}
        />
      )}
    </div>
  ) : (
    <Button
      type="primary"
      loader={loader}
      text={language.addCart}
      clickFunction={() => {
        currentButtonSetter("ADD");
        addToCart(cartDispatch, id, toastDispatch, loaderSetter);
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
  theme,
  loader,
  loaderSetter,
  currentButton,
  currentButtonSetter
) {
  return quantity > 0 ? (
    <div className="productPreviewQuantityHandler">
      {loader && currentButton === "DECREASE" ? (
        <MiniLoader />
      ) : (
        <img
          src={minus}
          onClick={() => {
            currentButtonSetter("DECREASE");
            quantityManagerInCart(
              cartDispatch,
              "DECREASE",
              id,
              toastDispatch,
              loaderSetter
            );
          }}
        />
      )}
      <p style={{ color: theme.boldText }}>{quantity}</p>
      {loader && currentButton === "INCREASE" ? (
        <MiniLoader />
      ) : (
        <img
          src={plus}
          onClick={() => {
            currentButtonSetter("INCREASE");
            quantityManagerInCart(
              cartDispatch,
              "INCREASE",
              id,
              toastDispatch,
              loaderSetter
            );
          }}
        />
      )}
    </div>
  ) : (
    <Button
      type="primary"
      loader={loader}
      text={language.addCart}
      size="product-preview-btn"
      clickFunction={() => {
        currentButtonSetter("ADD");
        addToCart(cartDispatch, id, toastDispatch, loaderSetter);
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
  theme,
  loader,
  loaderSetter,
  currentButton,
  currentButtonSetter
) {
  return (
    <div className="quantity-controls" style={{ color: theme.primaryText }}>
      {language.quantity}: &ensp;
      {loader && currentButton === "DECREASE" ? (
        <MiniLoader />
      ) : (
        <img
          src={minus}
          onClick={() => {
            currentButtonSetter("DECREASE");
            quantityManagerInCart(
              cartDispatch,
              "DECREASE",
              id,
              toastDispatch,
              loaderSetter
            );
          }}
        />
      )}
      <p style={{ color: theme.boldText }}>{quantity}</p>
      {loader && currentButton === "INCREASE" ? (
        <MiniLoader />
      ) : (
        <img
          src={plus}
          onClick={() => {
            currentButtonSetter("INCREASE");
            quantityManagerInCart(
              cartDispatch,
              "INCREASE",
              id,
              toastDispatch,
              loaderSetter
            );
          }}
        />
      )}
    </div>
  );
}
