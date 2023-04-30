import React from "react";
import { Row, Col } from "react-bootstrap";
import backgroundImage from "../Assets/Images/contact-background.jpg";

const ContactPage = () => {
  return (
    <div>
      <Row>
        <Col>
          <Row
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "25vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></Row>
          <Row className="p-4">
            <h2 className="text-center mb-1 fw-bold text-dark">Contact Us</h2>
            <p className="text-center text-dark">
              We would love to hear from you! Contact us using the information
              below:
            </p>
          </Row>
          <Row className="text-center p-4">
            <Col>
              <h4 className="text-dark">Email:</h4>
              <p>customerservice@webmart.com</p>
            </Col>
            <Col>
              <h4 className="text-dark">Phone:</h4>
              <p>1-800-WEBMART</p>
            </Col>
            <Col>
              <h4 className="text-dark">Address:</h4>
              <p>1400 Washington Ave, Albany, NY 12222, USA</p>
            </Col>
          </Row>
          <Row
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "35.6vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></Row>
        </Col>
      </Row>
    </div>
  );
};

export default ContactPage;
