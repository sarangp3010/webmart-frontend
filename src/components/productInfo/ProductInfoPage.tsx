import { Link, useParams } from "react-router-dom";
import {
  Row,
  Col,
  Button,
  Form,
  Container,
  Image,
} from "react-bootstrap";
import { addCarts } from "../../services/cart/cartService";
import { getProductById } from "../../services/products/productsService";
import { useEffect, useState } from "react";
import Customization from '../customization/customization';
import { successToast } from "../toast/toast";

const ProductInfoPage = () => {
  let { productId } = useParams();

  const getProduct = (producId: any) => {
      return getProductById(producId).then((res) => {
        setProductName(res.data.name);
        setProductDescription(res.data.description);
        setProductImage(res.data.thumbnailImage);
        setProductProperties(res.data.properties);
        setProductPrice(res.data.price);
        productMetrics();
      });;
  };

  const [product, setProduct] = useState(null);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productProperties, setProductProperties] = useState([] as any);
  const [productImage, setProductImage] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
 
  const addToCart = () => {
    const handler = async (data: any) => {
      await addCarts(data);
    };

    handler({ productId: productId, quantity: productQuantity==""?1:productQuantity});
    successToast("Product added in cart!!!");
  };

  useEffect(()=>{
    getProduct(productId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);
  const productMetrics = () => {
    for (let index = 0; index < productProperties.length; index++) {
      console.log(index);
    }
  };

  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col>
            <div className="card">
              <Image
                src={productImage}
                className="m-auto"
                width={300}
                height={400}
                alt=""
              />
              <div className="card-body text-center fw-bold">{productName}</div>
            </div>
          </Col>

          <Col className="col-8 mt-5">
            <Row>
              <h3 className="fw-bold pb-2 text-success">${productPrice}</h3>
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
                    min = {0}
                    onChange={(event) => {
                      setProductQuantity(event.target.value);
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button
                    className="btn-dark mb-1"
                    onClick={(e) => {
                      addToCart();
                    }}
                  >
                    Add to Cart
                  </Button>
                </Col>
              </Row>
              <Row className="pt-4">
                <h3 className="fw-bold"> Product Description:</h3>
                <p className="text-secondary fst-italic">
                  {productDescription}
                </p>
              </Row>

              <Row>
                <h3 className="fw-bold pt-1"> Product Metrics:</h3>
              </Row>
              <Row></Row>
            </Form>
          </Col>
        </Row>
        
        <Customization data={{productId,  productProperties}} addToCart={addToCart}/>

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

export default ProductInfoPage;
