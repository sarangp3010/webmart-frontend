import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import temp from '../Assets/Images/logo192.png';
const products = [
    { "img": "../../Assets/Images/logo192.png", "title": "Product 1" },
    { "img": "../Assets/Images/logo192.png", "title": "Product 2" },
    { "img": "../../../assets/images/logo192.png", "title": "Product 3" },
    { "img": "../../../assets/images/products/1.jpg", "title": "Product 4" },
    { "img": "../../../assets/images/products/1.jpg", "title": "Product 5" },
    { "img": "../../../assets/images/products/1.jpg", "title": "Product 6" },
    { "img": "../../../assets/images/products/1.jpg", "title": "Product 7" },
    { "img": "../../../assets/images/products/1.jpg", "title": "Product 8" }]

const AfterSeach = () => {
    return (
        <div>
            Welcome After seach page.

            <Row>
                {products.map((product, i) => (
                    <Col key={i} sm={12} md={6} lg={3} className="mb-3">
                        <img src={temp}/>
                        <h2>{product.title}</h2>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default AfterSeach;
