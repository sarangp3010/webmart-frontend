import React, { Component } from "react";
import { Stepper } from "react-form-stepper";

class Billing extends Component<any, any> {
  continue = (e: any) => {
    e.preventDefault();
    const isAccoutNameValid = this.props.validateAccountName();
    const isAccountNumberValid = this.props.validateAccountNumber();
    const isRoutingNumberValid = this.props.validateRoutingNumber();
    if (isAccountNumberValid && isAccoutNameValid && isRoutingNumberValid) {
      this.props.nextStep();
    }
  };

  back = (e: any) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      accountName,
      accountNumber,
      routingNumber,
      handleChange,
      validateAccountName,
      validateAccountNumber,
      validateRoutingNumber,
      isErrorAccountName,
      isErrorAccountNumber,
      isErrorRoutingNumber,
      errorMessageAccountName,
      errorMessageAccountNumber,
      errorMessageRoutingNumber,
    } = this.props;

    return (
      <div className="form">
        <form>
          {/* <Stepper
            steps={[
              { label: "Business Information" },
              { label: "Billing" },
              { label: "Review" },
            ]}
            activeStep={1}
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
          /> */}

          <div className="form-group">
            <div className="form-group__element">
              <label
                htmlFor="Name on Bank Account"
                className="form-group__label"
              >
                Name on Bank Account
              </label>
              <input
                type="text"
                value={accountName}
                name="accountName"
                onChange={handleChange("accountName")}
                onBlur={validateAccountName}
                className="form-group__input"
              />
              <p className="error">
                {isErrorAccountName && errorMessageAccountName}
              </p>
            </div>
            <div className="form-group__element">
              <label htmlFor="Account Number" className="form-group__label">
                AccountNumebr
              </label>
              <input
                type="text"
                value={accountNumber}
                name="accountNumber"
                onChange={handleChange("accountNumber")}
                onBlur={validateAccountNumber}
                className="form-group__input"
              />
              <p className="error">
                {isErrorAccountNumber && errorMessageAccountNumber}
              </p>
            </div>
            <div className="form-group__element">
              <label htmlFor="Routing Number" className="form-group__label">
                Routing Number
              </label>
              <input
                type="text"
                value={routingNumber}
                name="routingNumber"
                onChange={handleChange("routingNumber")}
                onBlur={validateRoutingNumber}
                className="form-group__input"
              />
              <p className="error">
                {isErrorRoutingNumber && errorMessageRoutingNumber}
              </p>
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
              onClick={this.continue}
            >
              Next
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Billing;
