import React ,{useState}from "react";
import "./productFilter.css";
import Button from "../button/Button";
const ProductFilter = () => {
  const [show,showSetter]=useState(false);



  return (
    <div>
      <div className="product-filter-toggle-btn">
        <Button type="secondary" text="Filter" clickFunction={()=>{showSetter(value=>!value)}}/>
      </div>
      <div className={`productFilter ${show?'show':'hide'}`}>
        <div className="filter-0">
          <div className="fliter-heading">
            <p>Filter's</p>
            <p className="filter-clear-all">Clear All</p>
          </div>
        </div>
        <div className="fliter-1">
          <div className="fliter-heading">
            <p>Sort By</p>
          </div>
          <div className="filter-options">
            <div className="filter-option">
              <label>Price Low to High</label>
              <input type="radio" name="price" value="low-high" />
            </div>
            <div className="filter-option">
              <label>Price high to low</label>
              <input type="radio" name="price" value="high-low" />
            </div>
          </div>
        </div>

        <div className="fliter-2">
          <div className="fliter-heading">
            <p>Rating</p>
          </div>
          <div className="filter-options">
            <div className="filter-option">
              <label>5 Stars Only</label>
              <input type="radio" name="stars" value="five" />
            </div>
            <div className="filter-option">
              <label>4 Stars and above</label>
              <input type="radio" name="stars" value="four" />
            </div>
            <div className="filter-option">
              <label>3 Stars and above</label>
              <input type="radio" name="stars" value="three" />
            </div>
            <div className="filter-option">
              <label>2 Stars and above</label>
              <input type="radio" name="stars" value="two" />
            </div>
            <div className="filter-option">
              <label>1 Stars and above</label>
              <input type="radio" name="stars" value="one" />
            </div>
          </div>
        </div>

        <div className="fliter-3">
          <div className="fliter-heading">
            <p>Pet Type</p>
          </div>
          <div className="filter-options">
            <div className="filter-option">
              <label>Dog</label>
              <input type="checkbox" value="dog" />
            </div>
            <div className="filter-option">
              <label>Cat</label>
              <input type="checkbox" value="cat" />
            </div>
            <div className="filter-option">
              <label>Bird</label>
              <input type="checkbox" value="bird" />
            </div>
            <div className="filter-option">
              <label>Fish</label>
              <input type="checkbox" value="fish" />
            </div>
            <div className="filter-option">
              <label>Reptile</label>
              <input type="checkbox" value="reptile" />
            </div>
          </div>
        </div>

        <div className="filter-4">
          <div className="fliter-heading">
            <p>Other's</p>
          </div>
          <div className="filter-options">
            <div className="filter-option">
              <label>Include Out of Stock</label>
              <input type="checkbox" value="stock-out" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
