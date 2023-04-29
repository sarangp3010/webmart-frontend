import React, { Component } from "react";

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
      <div className="form mt-3">
        <h3 className="text-center mb-4">Business Information</h3>
        <form>
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
                className="form-group__input d-block mx-auto"
                placeholder="Street Address"
              />
              {isErrorStreetAddress && errorMessageStreetAddress ? (
                <p className="d-block error">
                  {isErrorStreetAddress && errorMessageStreetAddress}
                </p>
              ) : null}
              <input
                type="text"
                value={addressLine2}
                name="addressLine2"
                onChange={handleChange("addressLine2")}
                className="form-group__input d-block mx-auto"
                placeholder="Address Line 2"
              />
              <input
                type="text"
                value={city}
                name="city"
                onChange={handleChange("city")}
                onBlur={validateCity}
                className="form-group__input d-block mx-auto"
                placeholder="City / Town"
              />
              {isErrorCity && errorMessageCity ? (
                <p className="error">{isErrorCity && errorMessageCity}</p>
              ) : null}

              <input
                type="text"
                value={state}
                name="state"
                onChange={handleChange("state")}
                onBlur={validateState}
                className="form-group__input d-block mx-auto"
                placeholder="State / Region"
              />
              {isErrorState && errorMessageState ? (
                <p className="error">{isErrorState && errorMessageState}</p>
              ) : null}

              <input
                type="text"
                value={zip}
                name="zip"
                onChange={handleChange("zip")}
                onBlur={validateZip}
                className="form-group__input d-block mx-auto"
                placeholder="ZIP / Postal code"
              />
              {isErrorZip && errorMessageZip ? (
                <p className="error">{isErrorZip && errorMessageZip}</p>
              ) : null}
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
