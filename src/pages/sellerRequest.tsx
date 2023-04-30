import React, { useState } from "react";
import axios from "axios";
import "../stylesheets/pages/_admindashboard.scss";
import "../stylesheets/pages/_becomeSeller.scss";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { API } from "../middleware/middleware";

const SellerRequest = (props: any) => {
  const { request } = props || {};
  const [message, setMessage] = useState("");
  console.log("In Seller Reuqest personal", request);

  const {
    companyRegistrationNumber,
    streetAddress,
    addressLine2,
    city,
    state,
    zip,
    storeName,
    accountName,
    routingNumber,
    accountNumber,
    id,
  } = request || {};

  const handleChangeOnMessage = (event: any) => {
    const { value } = event?.target || {};
    console.log(value);
    setMessage(value);
  };

  const handleClickOnAcceptOrDecline = (decision: string) => {
    const token = localStorage.getItem("lToken");

    API("/users/sellerRequestDecision", {
      method: "POST",
      data: {
        userId: request.user.id,
        sellerRequestId: id,
        decision,
        ...(message && { message }),
      },
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("In API ", response.data.pendingRequest);
        props.setRequestToggle();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClickOnBack = () => {
    props.setRequestToggle();
  };

  return (
    <Container className="becomeSeller">
      <div className="form mt-3">
        <h3 className="text-center mb-4">Review Details</h3>
        <div>
          <div className="summary">
            <h2 className="summary__heading">Business Information</h2>
            <div>
              <p>
                <span className="summary__item-title">
                  Company Registration Number:
                </span>{" "}
                {companyRegistrationNumber}
              </p>
            </div>
            <div>
              <div>
                <p>
                  <span className="summary__item-title">Store Name:</span>{" "}
                  {storeName}
                </p>
              </div>
              <div>
                <p>
                  <span className="summary__item-title">Street Address:</span>{" "}
                  {streetAddress}
                </p>
              </div>
              <div>
                <p>
                  <span className="summary__item-title">Address Line 2:</span>{" "}
                  {addressLine2}
                </p>
              </div>
              <div>
                <p>
                  <span className="summary__item-title">City</span> {city}
                </p>
              </div>
              <div>
                <p>
                  <span className="summary__item-title">State</span> {state}
                </p>
              </div>
              <div>
                <p>
                  <span className="summary__item-title">Zip Code</span> {zip}
                </p>
              </div>
            </div>
          </div>

          <div className="summary">
            <h2 className="summary__heading">Billing Information</h2>
            <div>
              <div>
                <p>
                  <span className="summary__item-title">
                    Name on Bank Account
                  </span>{" "}
                  {accountName}
                </p>
              </div>
              <div>
                <p>
                  <span className="summary__item-title">Account Number</span>{" "}
                  {accountNumber}
                </p>
              </div>
              <div>
                <p>
                  <span className="summary__item-title">Routing Number</span>{" "}
                  {routingNumber}
                </p>
              </div>
            </div>
          </div>
          <div className="buttons">
            <input
              type="text"
              name="message"
              placeholder="Reason for accept or decline (optional)"
              onChange={handleChangeOnMessage}
              className="form-group__input"
            />
          </div>
          <div className="buttons">
            <button
              className="buttons__button buttons__button--back"
              onClick={() => handleClickOnAcceptOrDecline("declined")}
            >
              Decline
            </button>
            <button
              className="buttons__button buttons__button--next"
              type="submit"
              onClick={() => handleClickOnAcceptOrDecline("accepted")}
            >
              Accept
            </button>
          </div>
          <div className="text-center mt-3">
            <a href="javascript:void(0)" onClick={handleClickOnBack}>
              back
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};
const mapStateToProps = (state: any) => ({
  profile: state.profile.profileData,
});
export default connect(mapStateToProps, null)(SellerRequest);
