import "../stylesheets/pages/_products.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";


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
        <Row className="fluid-container mt-5 mb-2 p-2">
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
              <div className="card-body text-center fw-bold">Smartphone Case</div>
              <p className="card-text text-center mb-3 fw-bold" >$100</p>
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
              <div className="card-body text-center fw-bold">Electric Kettle</div>
              <p className="card-text text-center mb-3 fw-bold" >$300</p>
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
              <div className="card-body">Portable Power Bank</div>
              <p className="card-text text-center mb-3 fw-bold" >$100</p>
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
              <div className="card-body">Hair Dryer</div>
              <p className="card-text text-center mb-3 fw-bold" >$200</p>
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
              <div className="card-body">Water Bottle</div>
              <p className="card-text text-center mb-3 fw-bold" >$300</p>
            </div>
        </Col>
        
        <Col>
        <div className="card">
              <Image
                src="https://images.pexels.com/photos/5081399/pexels-photo-5081399.jpeg?auto=compress&cs=tinysrgb&w=1200"
                className="m-auto"
                width={300}
                height={400}
                alt=""
              />
              <div className="card-body">Wireless Headphones</div>
              <p className="card-text text-center mb-3 fw-bold" >$100</p>
            </div>
        </Col>
        
        
        
       

        
        
        
       
        </Row>
      </Container>
    </>
  );
};

export default productInfoPage;
