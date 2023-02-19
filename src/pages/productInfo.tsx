import "../stylesheets/pages/_products.scss";
import ProductInfoPage from "../components/ProductInfoPage";
import data from "../data.json";
import { useParams } from "react-router-dom";

const ProductInfo = () => {
  let { productId } = useParams();
  let product;

  data.forEach((element) => {
    if (element.product_Id === productId) {
      product = element;
    }
  });

  return (
    <div>
      <ProductInfoPage product={product} />
    </div>
  );
};

export default ProductInfo;
