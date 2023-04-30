import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/products/products";
import { useDispatch, useSelector } from "react-redux";
import data from "../data.json";
import SideBar from "../components/sideBar/sideBar";
import TRootState from "../store/root.types";
import {
  getProductsActionThunk,
} from "../store/products/products.action.async";
// import { getAll } from "../services/products/productsService";

const AfterSeach: React.FC<any> = () => {

  const dispatch = useDispatch();
  const [filteredData, setData] = useState([] as any);
  const setFilters = ({ minPrice, maxPrice, category, type }: any) => {
    
    function isFilter(val: any) {
      const price = Number((val?.price || "").slice(1, val.price.length) || 0);
      const priceFilter = price >= minPrice && price <= maxPrice;
      const categoryFilter =
        category === 0 ? true : category === val?.category_id;
      // const typeFilter =
      //   type === "all" ? true : type === val?.used_type;
      return priceFilter && categoryFilter;
    }
    setData((data || []).filter(isFilter));
  };

  const { products} = useSelector(
    (state: TRootState) => state?.product?.products
  );

  useEffect(() => {
    setData(products);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  useEffect(() => {
    dispatch(getProductsActionThunk(undefined, undefined, undefined));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="after-search">
      <div className="after-search-list-wrap">
        <div className="side-panel-wrap">
          <SideBar setFilters={setFilters} />
        </div>
        <div className="list-wrap">
          <Row>
            {(filteredData || []).length ? (
              <>
                {(filteredData || []).map((product : any, i : any) => (
                  <Col key={i} className="">
                    <Product data={product} />
                  </Col>
                ))}
              </>
            ) : (
              <>
              <div 
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                textAlign: "center",
              }}
              className="fs-2">
                No Products Found with Filters
                </div>
              </>
            )}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default AfterSeach;
