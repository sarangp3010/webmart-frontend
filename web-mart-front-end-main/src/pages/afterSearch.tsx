import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/products/products";
import data from "../data.json";
import SideBar from "../components/sideBar/sideBar";

const AfterSeach: React.FC<any> = () => {
  const [filteredData, setData] = useState(data);
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
                {(filteredData || []).map((product, i) => (
                  <Col key={i} sm={12} md={6} lg={4} className="">
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
