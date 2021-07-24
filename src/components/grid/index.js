import React from "react";
import "./style.css";
import Button from "../button";
import dog from "../../utils/images/icons/animal/dog.png";
import cat from "../../utils/images/icons/animal/cat.png";
import bird from "../../utils/images/icons/animal/bird.png";
import reptile from "../../utils/images/icons/animal/reptile.png";
import fish from "../../utils/images/icons/animal/fish.png";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useLanguage } from "../../contexts/languageContext/languageContext.js";
import { Link } from "react-router-dom";
const Grid = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const category1 = [
    { img: dog, pet: language.dog, link: "/products?animal=dog" },
    { img: cat, pet: language.cat, link: "/products?animal=cat" },
  ];
  const category2 = [
    { img: bird, pet: "Bird", link: "/products?animal=bird" },
    { img: fish, pet: "Fish", link: "/products?animal=fish" },
    { img: reptile, pet: "Reptile", link: "/products?animal=reptile" },
  ];

  return (
    <div className="grid-container">
      <div className="grid">
        <div className="grid-row-1">
          {category1.map((item) => {
            return (
              <Link to={item.link}>
                <div
                  className="category1"
                  style={{
                    backgroundColor: theme.highLightBackground,
                    color: theme.boldText,
                  }}
                >
                  <div className="cateogry-img-container-1">
                    <img src={item.img} />
                  </div>
                  <div className="cateogry-details-1">
                    <h1>{item.pet}</h1>
                    <Link to={item.link}>
                      <Button type="primary" text={language.shop} />
                    </Link>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="grid-row-2">
          {category2.map((item) => {
            return (
              <Link to={item.link}>
                <div
                  className="category2"
                  style={{
                    backgroundColor: theme.highLightBackground,
                    color: theme.boldText,
                  }}
                >
                  <div className="cateogry-img-container-2">
                    <img src={item.img} />
                  </div>
                  <div className="cateogry-details-2">
                    <h1>{item.pet}</h1>
                    <Link to={item.link}>
                      <Button type="primary" text={language.shop} />
                    </Link>
                  </div>
                </div>
              </Link>
            );
          })}

          {/* <div
            className="category2"
            style={{
              backgroundColor: theme.highLightBackground,
              color: theme.boldText,
            }}
          >
            {" "}
            <div>
              <img src={bird} />
            </div>
            <div>
              <div>
                <h1>{language.bird}</h1>
                <Button type="primary" text={language.shop} />
              </div>
            </div>
          </div>

          <div
            className="category2"
            style={{
              backgroundColor: theme.highLightBackground,
              color: theme.boldText,
            }}
          >
            {" "}
            <div>
              <img src={fish} />
            </div>
            <div>
              <div>
                <h1>{language.fish}</h1>
                <Button type="primary" text={language.shop} />
              </div>
            </div>
          </div> */}

          {/* <div
            className="category2"
            style={{
              backgroundColor: theme.highLightBackground,
              color: theme.boldText,
            }}
          >
            {" "}
            <div>
              <img src={reptile} />
            </div>
            <div>
              <div>
                <h1>{language.reptile}</h1>
                <Button type="primary" text={language.shop} />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Grid;
