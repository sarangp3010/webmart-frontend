import ProductInfoPage from "../components/productInfo/ProductInfoPage";
import data from "../data.json";
import { useParams } from "react-router-dom";
import React from "react";

const ProductInfo = () => {
  let { productId } = useParams();
  let product;

  data.forEach((element) => {
    if (element.product_Id === productId) {
      product = element;
    }
  });

  return (
    <React.Fragment>
      <ProductInfoPage product={product} />
    </React.Fragment>
  );
};

export default ProductInfo;
