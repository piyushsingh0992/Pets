import React from "react";
import "./productPage.css";
import ProductGrid from "../../components/productGrid/ProductGrid.js";
import ProductFilter from "../../components/productFilter/ProductFilter.js";

const ProductPage = () => {
  return (
    <div className="productPage">
      <ProductFilter />
      <ProductGrid />
      
    </div>
  );
};

export default ProductPage;
