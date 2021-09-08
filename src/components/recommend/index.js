import React from "react";
import "./style.css";
import Card from "../card";

import { useTheme } from "../../contexts/themeContext";
import { useLanguage } from "../../contexts/languageContext";
import { Link } from "react-router-dom";

const Recommend = ({ filteredData }) => {
  const { theme } = useTheme();
  const { language } = useLanguage();

  return (
    <div className="recommend-container">
      <div className="recommendation-heading">
        <h1> {language.recommend}</h1>
        <Link
          to={`/products?FAST_DELIVERY=true&ANIMAL=${
            filteredData && filteredData[0] && filteredData[0].tags.animal
          }&cateogry=${
            filteredData && filteredData[0] && filteredData[0].tags.category
          }`}
        >
          <p style={{ color: theme.boldText }}>{language.more}</p>
        </Link>
      </div>
      <div className="recommend">
        {filteredData.map((item) => {
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
            />
          );
        })}
      </div>
    </div>
  );
};

export default Recommend;
