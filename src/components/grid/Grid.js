import React from "react";
import "./grid.css";
import Button from "../button/Button.js";
import dog from "./images/dog.jpg";
import cat from "./images/cat.jpg";
import bird from "./images/bird.jpg";
import reptile from "./images/reptile.jpg";
import fish from "./images/fish.jpg";

const Grid = () => {
  return (
    <div className="grid-container">
      <div className="grid">
        <div className="grid-row-1">
          <div className="category1">
            <img src={dog} />
            <div>
            <h1>Dog</h1>
            <Button type="primary" text ="Shop Now"/>
            </div>
          </div>
          <div className="category1">
            <img src={cat} />
            <div>
            <h1>Cat</h1>
            <Button type="primary" text ="Shop Now"/>
            </div>
          </div>
        </div>
        <div className="grid-row-2">
          <div className="category2">
            <img src={bird} />
            <div>
            <h1>Bird</h1>
            <Button type="primary" text ="Shop Now"/>
            </div>
          </div>

          <div className="category2">
            <img src={fish} />
            <div>
            <h1>Fish</h1>
            <Button type="primary" text ="Shop Now"/>
            </div>
          </div>

          <div className="category2">
            <img src={reptile} />
            <div>
            <h1>Reptile</h1>
            <Button type="primary" text ="Shop Now"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
