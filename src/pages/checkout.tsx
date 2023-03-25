import React, { useState } from "react";
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
  const [billingSameAsDelvery, setBillingSameAsDelvery] = useState(false);
  const [nextButton, setNextButton] = useState(1);

  const handleCheckboxChange = () => {
    setBillingSameAsDelvery(!billingSameAsDelvery);
  };

  const handleNextStep = () => {
    setNextButton(nextButton + 1);
  };

  const handlePreviousStep = () => {
    setNextButton(nextButton - 1);
  };

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
          defaultActiveKey="delivery-info"
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
                <Form.Group controlId="formBasicName" className="pt-2">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail" className="pt-2">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicAddress" className="pt-2">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" placeholder="Enter address" />
                </Form.Group>
                <Form.Group controlId="formBasicCity" className="pt-2">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" placeholder="Enter city" />
                </Form.Group>
                <Form.Group controlId="formBasicState" className="pt-2">
                  <Form.Label>State</Form.Label>
                  <Form.Control type="text" placeholder="Enter state" />
                </Form.Group>
                <Form.Group controlId="formBasicZip" className="pt-2">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control type="text" placeholder="Enter zip" />
                </Form.Group>
                <Col className="text-center pt-3">
                  <Button
                    className="btn-success m-1 text-light"
                    onClick={handleNextStep}
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
                      <Form.Group controlId="formBasicName" className="pt-2">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail" className="pt-2">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>
                      <Form.Group controlId="formBasicAddress" className="pt-2">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter address" />
                      </Form.Group>
                      <Form.Group controlId="formBasicCity" className="pt-2">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="Enter city" />
                      </Form.Group>
                      <Form.Group controlId="formBasicState" className="pt-2">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" placeholder="Enter state" />
                      </Form.Group>
                      <Form.Group controlId="formBasicZip" className="pt-2">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control type="text" placeholder="Enter zip" />
                      </Form.Group>
                    </Form>
                  </Col>
                )}
                <Col className="text-center pt-3">
                  <Button
                    className="btn-success m-1 text-light"
                    onClick={handlePreviousStep}
                  >
                    Previous
                  </Button>
                  <Button
                    className="btn-success m-1 text-light"
                    onClick={handleNextStep}
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
                  <Form.Group controlId="formBasicCardNumber" className="pt-2">
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter card number" />
                  </Form.Group>
                  <Form.Group controlId="formBasicExpiration" className="pt-2">
                    <Form.Label>Expiration Date</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter expiration date"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicCVV" className="pt-2">
                    <Form.Label>CVV</Form.Label>
                    <Form.Control type="text" placeholder="Enter CVV" />
                  </Form.Group>
                  <Col className="text-center pt-3">
                    <Button
                      className="btn-success m-1 text-light"
                      onClick={handlePreviousStep}
                    >
                      Previous
                    </Button>
                    <Button
                      className="btn-success m-1 text-light"
                      onClick={handleNextStep}
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
                  <h4 className="text-success">$183.50</h4>
                </Row>
                <Row className="pt-4">
                  <Col className="text-center">
                    <Button
                      className="btn-success m-1 text-light"
                      onClick={handlePreviousStep}
                    >
                      Previous
                    </Button>
                    <Button className="btn-success m-1 text-light">
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
