import "../stylesheets/pages/_products.scss";
import home from "../Assets/Images/home.png";
import user from "../Assets/Images/user.png";
import cart from "../Assets/Images/cart.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const productInfoPage = (props: any) => {
  return (
    <>
      <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <h1 className="navbar-brand my-auto">WebMart</h1>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="btn btn-outline-dark" type="submit">
                  <Image
                    src={home}
                    width={30}
                    height={30}
                    rounded
                    fluid
                    className=""
                    alt=""
                  />
                </button>
              </li>
            </ul>
            <Form>
              <Form.Control
                className=""
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></Form.Control>
            </Form>
            <button className="btn btn-outline-dark" type="submit">
              <Image
                src={user}
                width={40}
                height={40}
                rounded
                fluid
                className="mx-1"
                alt=""
              />
            </button>
            <button className="btn btn-outline-dark" type="submit">
              <Image
                src={cart}
                width={40}
                height={40}
                rounded
                fluid
                className="mx-1"
                alt=""
              />
            </button>
          </div>
        </div>
      </Navbar>

      <Container>
        <Row className="mt-5">
          <Col>
            <div className="card">
              <Image
                src={props.product.img}
                className="m-auto"
                width={300}
                height={400}
                alt=""
              />
              <div className="card-body">{props.product.name}</div>
            </div>
          </Col>

          <Col className="col-8 mt-5">
            <Row>
              <h3 className="fw-bold pb-2 text-success">
                {props.product.price}
              </h3>
            </Row>

            <Form>
              <Row className="pb-2">
                <Col className="col-auto">
                  <Form.Label>
                    <h5 className="fw-bold">Quantity:</h5>
                  </Form.Label>
                </Col>
                <Col className="col-1">
                  <Form.Control
                    className="form-control form-control-sm"
                    type="number"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button className="btn-dark mb-1">Add to Cart</Button>
                </Col>
              </Row>
              <Row className="pt-4">
                <h3 className="fw-bold"> Product Description:</h3>
                <p className="text-secondary fst-italic">
                  {props.product.description}
                </p>
              </Row>

              <Row>
                <h3 className="fw-bold pt-1"> Product Metrics:</h3>
              </Row>
              <Row>
                <Col>Weight:</Col>
                <Col>Length:</Col>
                <Col>Width:</Col>
                <Col>Height:</Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default productInfoPage;
