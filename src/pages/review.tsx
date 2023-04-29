import React, { Component } from "react";

class Review extends Component<any, any> {
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
      <div className="form mt-3">
        <h3 className="text-center mb-4">Review Details</h3>
        <div>
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

export default Review;
