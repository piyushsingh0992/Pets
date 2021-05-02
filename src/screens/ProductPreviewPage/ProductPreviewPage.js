import React from "react";
import "./productPreviewPage.css";

import ProductPreview from "../../components/productPreview/ProductPreview.js";
import Recommend from "../../components/recommend/Recommend.js";
const ProductPreviewPage = () => {
  return (
    <div className="productPreviewPage">
      <ProductPreview />
      <Recommend />
    </div>
  );
};

export default ProductPreviewPage;
