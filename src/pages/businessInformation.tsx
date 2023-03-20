import React, { Component } from "react";
import { Stepper } from "react-form-stepper";

class BusinessInformation extends Component<any, any> {
  continue = (e: any) => {
    e.preventDefault();
    const isCompanyRegistrationNumberValid =
      this.props.validateCompanyRegistrationNumber();
    const isStreetAddressValid = this.props.validateStreetAddress();
    const isCityValid = this.props.validateCity();
    const isStateValid = this.props.validateState();
    const isZipValid = this.props.validateZip();
    const isStoreNameValid = this.props.validateStoreName();
    if (
      isCompanyRegistrationNumberValid &&
      isStreetAddressValid &&
      isCityValid &&
      isStateValid &&
      isZipValid &&
      isStoreNameValid
    ) {
      this.props.nextStep();
    }
  };

  render() {
    const {
      companyRegistrationNumber,
      streetAddress,
      addressLine2,
      state,
      city,
      zip,
      storeName,
      handleChange,
      validateCompanyRegistrationNumber,
      validateStreetAddress,
      validateCity,
      validateState,
      validateZip,
      validateStoreName,
      isErrorCompanyRegistrationNumber,
      isErrorStreetAddress,
      isErrorCity,
      isErrorState,
      isErrorZip,
      isErrorStoreName,
      errorMessageCompanyRegistrationNumber,
      errorMessageStreetAddress,
      errorMessageCity,
      errorMessageState,
      errorMessageZip,
      errorMessageStoreName,
    } = this.props;

    return (
      <div className="form">
        <form>
          <Stepper
            steps={[
              { label: "Business Information" },
              { label: "Billing" },
              { label: "Review" },
            ]}
            activeStep={0}
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

          <div className="form-group">
            <div className="form-group__element">
              <label
                htmlFor="Company Registation Number"
                className="form-group__label"
              >
                Company Registration Number
              </label>
              <input
                type="text"
                value={companyRegistrationNumber}
                name="companyRegistrationNumber"
                onChange={handleChange("companyRegistrationNumber")}
                onBlur={validateCompanyRegistrationNumber}
                className="form-group__input"
              />
              <p className="error">
                {isErrorCompanyRegistrationNumber &&
                  errorMessageCompanyRegistrationNumber}
              </p>
            </div>
            <div className="form-group__element">
              <label
                htmlFor="Company Registation Number"
                className="form-group__label"
              >
                Store Name
              </label>
              <input
                type="text"
                value={storeName}
                name="storeName"
                onChange={handleChange("storeName")}
                onBlur={validateStoreName}
                className="form-group__input"
              />
              <p className="error">
                {isErrorStoreName && errorMessageStoreName}
              </p>
            </div>
            <div className="form-group__element">
              <label htmlFor="last name" className="form-group__label">
                Registered Business Address
              </label>
              <input
                type="text"
                value={streetAddress}
                name="streetAddress"
                onChange={handleChange("streetAddress")}
                onBlur={validateStreetAddress}
                className="form-group__input"
                placeholder="Street Address"
              />
              <br />
              <p className="error">
                {isErrorStreetAddress && errorMessageStreetAddress}
              </p>
              <input
                type="text"
                value={addressLine2}
                name="addressLine2"
                onChange={handleChange("addressLine2")}
                className="form-group__input"
                placeholder="Address Line 2"
              />
              <br />
              <input
                type="text"
                value={city}
                name="city"
                onChange={handleChange("city")}
                onBlur={validateCity}
                className="form-group__input"
                placeholder="City / Town"
              />
              <br />
              <p className="error">{isErrorCity && errorMessageCity}</p>
              <input
                type="text"
                value={state}
                name="state"
                onChange={handleChange("state")}
                onBlur={validateState}
                className="form-group__input"
                placeholder="State / Region"
              />
              <br />
              <p className="error">{isErrorState && errorMessageState}</p>
              <input
                type="text"
                value={zip}
                name="zip"
                onChange={handleChange("zip")}
                onBlur={validateZip}
                className="form-group__input"
                placeholder="ZIP / Postal code"
              />
              <p className="error">{isErrorZip && errorMessageZip}</p>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
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

export default BusinessInformation;
