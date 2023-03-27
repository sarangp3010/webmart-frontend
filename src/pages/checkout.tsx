import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addAddress, addCard, placeOrder } from "../services/checkout/checkout";
import { getCarts } from "../services/cart/cartService";

import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Tab,
  Tabs,
  ProgressBar,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [billingSameAsDelvery, setBillingSameAsDelvery] = useState(false);
  const [nextButton, setNextButton] = useState(1);
  const [total, setTotal] = useState(0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [addressType, setAddressType] = useState("delivery");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [county, setCounty] = useState("");
  const [pincode, setPincode] = useState("");
  const [country, setCountry] = useState("");

  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [CVV, setCVV] = useState("");

  const [stripeCardId, setStripeCardId] = useState("");
  const [addressId, setAddressId] = useState("");

  const sendAddressToBackend = async () => {
    const res = await addAddress({
      params: {
        name: name,
        email: email,
        addressType: addressType,
        streetAddress: streetAddress,
        city: city,
        county: county || undefined,
        pincode: pincode,
        country: country,
      },
    });
    setAddressId(res.data.id);
  };

  const sendCardToBackend = async () => {
    const res = await addCard({
      body: {
        name: nameOnCard,
        cardNumber: cardNumber,
        expMonth: expMonth,
        expYear: expYear,
        cvc: CVV,
      },
    });
    setStripeCardId(res.data.sources.id);
  };

  const handleCheckboxChange = () => {
    setBillingSameAsDelvery(!billingSameAsDelvery);
  };

  const orderPlace = () => {
    placeOrder({
      stripeCardId: stripeCardId,
      addressId: addressId,
    }).then(() => {
      navigate("/order/success");
    });
  };

  useEffect(() => {
    let tempData: any;
    const Temp = async () => {
      tempData = await getCarts();
      tempData = tempData.data.carts;
      let price = 0,
        discount = 0;
      (tempData || []).forEach((cart: any, i: number) => {
        const currentPrice = (cart?.product?.price || 0) * cart?.quantity;
        price += currentPrice;
        discount += (currentPrice * (cart?.product?.discount || 0)) / 100;
      });

      const finalPrice = (price - discount) * 1.08;
      setTotal(finalPrice);
    };

    Temp();
  }, []);

  const steps = [
    {
      title: "Delivery Information",
      isCompleted: nextButton > 1,
      isActive: nextButton === 1,
    },
    {
      title: "Billing Information",
      isCompleted: nextButton > 2,
      isActive: nextButton === 2,
    },
    {
      title: "Payment Information",
      isCompleted: nextButton > 3,
      isActive: nextButton === 3,
    },
  ];

  return (
    <Container>
      <Row className="pt-4">
        <Link to={"/cart"}>
          <Button className="btn-dark mb-1 text-light">Back to Cart</Button>
        </Link>
      </Row>
      <Row className="pt-3 text-center">
        <h2 className="fw-bold">Check Out</h2>
      </Row>
      <ProgressBar>
        {steps.map((step, index) => (
          <ProgressBar
            key={index}
            label={step.title}
            visuallyHidden
            animated
            now={step.isCompleted ? 34 : 0}
            variant={
              step.isActive ? "danger" : step.isCompleted ? "success" : "light"
            }
          />
        ))}
      </ProgressBar>
      <Row className="pt-4">
        <Tabs
          defaultActiveKey="step1"
          className="m-3"
          fill
          activeKey={`step${nextButton}`}
          hidden
        >
          <Tab eventKey="step1" title="Delivery Information" color="success">
            <Row>
              <Col></Col>
              <Col>
                <h3 className="text-center">Delivery</h3>
                <Form>
                  <Form.Group controlId="name" className="pt-2">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter Name"
                      onChange={(event) => {
                        setName(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="email" className="pt-2">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Email"
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="address" className="pt-2">
                    <Form.Label>Street Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Address"
                      onChange={(event) => {
                        setStreetAddress(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="city" className="pt-2">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter City"
                      onChange={(event) => {
                        setCity(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="city" className="pt-2">
                    <Form.Label>County</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter County"
                      onChange={(event) => {
                        setCounty(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicZip" className="pt-2">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Zip"
                      onChange={(event) => {
                        setPincode(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicZip" className="pt-2">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Country"
                      onChange={(event) => {
                        setCountry(event.target.value);
                      }}
                    />
                  </Form.Group>
                </Form>
                <Col className="text-center pt-3">
                  <Button
                    className="btn-success m-1 text-light"
                    onClick={() => {
                      setNextButton(2);
                      setAddressType("delivery");
                      sendAddressToBackend();
                    }}
                  >
                    Next
                  </Button>
                </Col>
              </Col>
              <Col></Col>
            </Row>
          </Tab>
          <Tab eventKey="step2" title="Billing Information">
            <Row>
              <Col></Col>
              <Col>
                <h3 className="text-center">Billing</h3>
                <Form>
                  <Form.Check
                    type="checkbox"
                    label="Billing information is the same as delivery information"
                    checked={billingSameAsDelvery}
                    onChange={handleCheckboxChange}
                  />
                </Form>
                {!billingSameAsDelvery && (
                  <Col>
                    <Form>
                      <Form.Group controlId="name" className="pt-2">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Enter Name"
                          onChange={(event) => {
                            setName(event.target.value);
                          }}
                        />
                      </Form.Group>
                      <Form.Group controlId="email" className="pt-2">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter Email"
                          onChange={(event) => {
                            setEmail(event.target.value);
                          }}
                        />
                      </Form.Group>
                      <Form.Group controlId="streetAddress" className="pt-2">
                        <Form.Label>Street Address</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Address"
                          onChange={(event) => {
                            setStreetAddress(event.target.value);
                          }}
                        />
                      </Form.Group>
                      <Form.Group controlId="city" className="pt-2">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter City"
                          onChange={(event) => {
                            setCity(event.target.value);
                          }}
                        />
                      </Form.Group>
                      <Form.Group controlId="county" className="pt-2">
                        <Form.Label>County</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter County"
                          onChange={(event) => {
                            setCounty(event.target.value);
                          }}
                        />
                      </Form.Group>
                      <Form.Group controlId="zip" className="pt-2">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Zip"
                          onChange={(event) => {
                            setPincode(event.target.value);
                          }}
                        />
                      </Form.Group>
                      <Form.Group controlId="country" className="pt-2">
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Country"
                          onChange={(event) => {
                            setCountry(event.target.value);
                          }}
                        />
                      </Form.Group>
                    </Form>
                  </Col>
                )}
                <Col className="text-center pt-3">
                  <Button
                    className="btn-success m-1 text-light"
                    onClick={() => setNextButton(1)}
                  >
                    Previous
                  </Button>
                  <Button
                    className="btn-success m-1 text-light"
                    onClick={() => {
                      setNextButton(3);
                      setAddressType("billing");
                      sendAddressToBackend();
                    }}
                  >
                    Next
                  </Button>
                </Col>
              </Col>
              <Col></Col>
            </Row>
          </Tab>

          <Tab eventKey="step3" title="Payment Information">
            <Row>
              <Col></Col>
              <Col>
                <h3 className="text-center">Payment</h3>
                <Form>
                  <Form.Group controlId="cardHolderName" className="pt-2">
                    <Form.Label>Name On Card</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      onChange={(event) => {
                        setNameOnCard(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="cardNumber" className="pt-2">
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Card Number"
                      onChange={(event) => {
                        setCardNumber(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="expiryMonth" className="pt-2">
                    <Form.Label>Expiration Month</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Expiration Month"
                      onChange={(event) => {
                        setExpMonth(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="expiryYear" className="pt-2">
                    <Form.Label>Expiration Year</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Expiration Year"
                      onChange={(event) => {
                        setExpYear(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group controlId="CVV" className="pt-2">
                    <Form.Label>CVV</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter CVV"
                      onChange={(event) => {
                        setCVV(event.target.value);
                      }}
                    />
                  </Form.Group>
                  <Col className="text-center pt-3">
                    <Button
                      className="btn-success m-1 text-light"
                      onClick={() => setNextButton(2)}
                    >
                      Previous
                    </Button>
                    <Button
                      className="btn-success m-1 text-light"
                      onClick={() => {
                        setNextButton(4);
                        sendCardToBackend();
                      }}
                    >
                      Next
                    </Button>
                  </Col>
                </Form>
              </Col>
              <Col></Col>
            </Row>
          </Tab>
          <Tab eventKey="step4" title="Order Summary">
            <Row>
              <Col></Col>
              <Col>
                <h3 className="text-center">Your Order Summary</h3>
                <Row className="pt-3 pb-3 text-center">
                  <h3 className="fw-bold">Order Total</h3>
                  <h4 className="text-success">${total}</h4>
                </Row>
                <Row className="pt-4">
                  <Col className="text-center">
                    <Button
                      className="btn-success m-1 text-light"
                      onClick={() => setNextButton(3)}
                    >
                      Previous
                    </Button>
                    <Button
                      className="btn-success m-1 text-light"
                      onClick={() => {
                        orderPlace();
                      }}
                    >
                      Place Order
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col></Col>
            </Row>
          </Tab>
        </Tabs>
      </Row>
    </Container>
  );
};

export default CheckoutPage;
