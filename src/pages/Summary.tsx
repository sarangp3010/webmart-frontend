import React, { Component } from "react";
import { Stepper } from "react-form-stepper";

class Summary extends Component<any, any> {
  continue = (e: any) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e: any) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
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
      submitData,
    } = this.props;

    return (
      <div className="form">
        <div>
          <Stepper
            steps={[
              { label: "Business Information" },
              { label: "Billing" },
              { label: "Review" },
            ]}
            activeStep={2}
            styleConfig={{
              activeBgColor: "#2b7cff",
              activeTextColor: "#fff",
              inactiveBgColor: "#fff",
              inactiveTextColor: "#2b7cff",
              completedBgColor: "#fff",
              completedTextColor: "#2b7cff",
              size: "3em",
              circleFontSize: "1rem",
              labelFontSize: "0.875rem",
              borderRadius: "50%",
              fontWeight: "500",
            }}
            className={"stepper"}
            stepClassName={"stepper__step"}
          />

          <div className="summary">
            <h2 className="summary__heading">
              Confirm your Business Information
            </h2>
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
            <h2 className="summary__heading">
              Confirm your Billing Information
            </h2>
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
                  <span className="summary__item-title">Account Numebr</span>{" "}
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
            <button
              className="buttons__button buttons__button--back"
              onClick={this.back}
            >
              Back
            </button>
            <button
              className="buttons__button buttons__button--next"
              type="submit"
              onClick={submitData}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Summary;
