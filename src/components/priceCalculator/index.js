import React, { useState } from "react";
import "./style.css";
import Button from "../button";
import { useTheme } from "../../contexts/themeContext";
import { useLanguage } from "../../contexts/languageContext";
import { useCart } from "../../contexts/cartContext";
import { useAuth } from "../../contexts/authContext";
import axios from "axios";
import { useToast } from "../../contexts/toastContext";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const PriceCalculator = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const { cartState } = useCart();
  const { login } = useAuth();
  const [loader, loaderSetter] = useState(false);
  const { toastDispatch } = useToast();

  async function displayRazorpay() {
    loaderSetter(true);
    try {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      try {
        const data = await axios.post(
          "https://pets-1.piyushsingh6.repl.co/payment"
        );

        const options = {
          key: "rzp_test_y1bNXgdpBmdFQn",
          currency: data.currency,
          amount: finalPrice * 100,
          order_id: data.id,
          name: "Pets",
          description: "The Best a pet can get",
          image:
            "https://res.cloudinary.com/dvib6j4ie/image/upload/v1631096962/pets_yjbymq.svg",
          handler: function (response) {
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature);
          },
          prefill: {
            name: "piyush",
            email: login.userId,
          },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
        loaderSetter(false);
      } catch (error) {
        toastDispatch({
          type: "error",
          message: "Razorpay SDK failed to load. Are you online?",
        });

        loaderSetter(false);
      }
    } catch (error) {
      toastDispatch({
        type: "error",
        message: "Razorpay SDK failed to load. Are you online?",
      });
    }
  }

  let finalPrice = cartState.reduce((accumulator, state) => {
    return accumulator + state.quantity * state.price;
  }, 0);
  return (
    <div className="priceCalculator">
      <h1>
        {language.checkout} {language.amount}
      </h1>
      <div
        className="priceDetails"
        style={{ backgroundColor: theme.highLightBackground }}
      >
        {cartState.map((item) => {
          return (
            <div className="product-price" style={{ color: theme.primaryText }}>
              <p>
                {item.productName} ({item.quantity})
              </p>
              <p style={{ color: theme.primaryText }}>Rs {item.price}</p>
            </div>
          );
        })}

        <div className="final-amount" style={{ color: theme.boldText }}>
          <p>
            {language.checkout} {language.amount}
          </p>
          <p>Rs {finalPrice}</p>
        </div>
        <div className="priceCalculator-btn-container">
          <Button
            type="primary"
            text={language.checkout}
            size="priceCalculator-btn"
            clickFunction={displayRazorpay}
            loader={loader}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceCalculator;
