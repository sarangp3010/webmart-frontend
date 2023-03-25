import { Link } from "react-router-dom";
import { Row, Col, Button, Form, Container, Image } from "react-bootstrap";

const productInfoPage = (props: any) => {
  return (
    <>
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

      <div className="similar-products-container">
        <Row className="justify-content-center mt-5 mb-2 p-2">
          <h2 className="fw-bold"> Similar Products</h2>
        </Row>

        <Row>
          <Col>
            <div className="card">
              <Image
                src="https://images.pexels.com/photos/8473458/pexels-photo-8473458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="m-auto"
                width={300}
                height={400}
                alt=""
              />
              <Link to={"/productInfo/1"}>
                <div className="card-body link-dark">Smartphone Case</div>
              </Link>
              <p className="card-text text-center mb-3 fw-bold">$100</p>
            </div>
          </Col>
          <Col>
            <div className="card">
              <Image
                src="https://images.pexels.com/photos/11255397/pexels-photo-11255397.jpeg?auto=compress&cs=tinysrgb&w=1200"
                className="m-auto"
                width={300}
                height={400}
                alt=""
              />
              <Link to={"/productInfo/3"}>
                <div className="card-body link-dark">Electric Kettle</div>
              </Link>
              <p className="card-text text-center mb-3 fw-bold">$300</p>
            </div>
          </Col>

          <Col>
            <div className="card">
              <Image
                src="https://images.pexels.com/photos/10104285/pexels-photo-10104285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="m-auto"
                width={300}
                height={400}
                alt=""
              />
              <Link to={"/productInfo/4"}>
                <div className="card-body link-dark">Portable Power Bank</div>
              </Link>
              <p className="card-text text-center mb-3 fw-bold">$100</p>
            </div>
          </Col>

          <Col>
            <div className="card">
              <Image
                src="https://images.pexels.com/photos/973406/pexels-photo-973406.jpeg?auto=compress&cs=tinysrgb&w=1200"
                className="m-auto"
                width={300}
                height={400}
                alt=""
              />
              <Link to={"/productInfo/5"}>
                <div className="card-body link-dark">Hair Dryer</div>
              </Link>
              <p className="card-text text-center mb-3 fw-bold">$200</p>
            </div>
          </Col>

          <Col>
            <div className="card">
              <Image
                src="https://images.pexels.com/photos/1188649/pexels-photo-1188649.jpeg?auto=compress&cs=tinysrgb&w=1200"
                className="m-auto"
                width={300}
                height={400}
                alt=""
              />
              <Link to={"/productInfo/6"}>
                <div className="card-body link-dark">Water Bottle</div>
              </Link>
              <p className="card-text text-center mb-3 fw-bold">$300</p>
            </div>
          </Col>

          <Col>
            <li className="card">
              <Image
                src="https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="m-auto"
                width={300}
                height={400}
                alt=""
              />
              <Link to={"/productInfo/12"}>
                <div className="card-body link-dark">Desk Lamp</div>
              </Link>
              <p className="card-text text-center mb-3 fw-bold">$300</p>
            </li>
          </Col>
        </Row>
      </div>
      </Container>
    </>
  );
};

export default productInfoPage;
