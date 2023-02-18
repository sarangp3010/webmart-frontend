import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import temp from '../Assets/Images/logo192.png';
import Product from "../components/products/products";
import data from "../data.json";

const AfterSeach = () => {
    return (
        <div>
            <Row>
                {data.map((product, i) => (
                    <Col key={i} sm={12} md={4} lg={3} className="mb-3">
                        <Product data={product} />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default AfterSeach;
