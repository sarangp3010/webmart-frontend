import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "../components/products/products";
import data from "../data.json";
import SideBar from "../components/sideBar/sideBar";
import "../stylesheets/pages/_afterSearch.scss";

const AfterSeach = () => {
    return (
        <div className="after-search">
            <div className="after-search-list-wrap">
                <div className="side-panel-wrap">
                    <SideBar />
                </div>
                <div className="list-wrap">
                    <Row>
                        {data.map((product, i) => (
                            <Col key={i} sm={12} md={6} lg={4} className="">
                                <Product data={product} />
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default AfterSeach;
