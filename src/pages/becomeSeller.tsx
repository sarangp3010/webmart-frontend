import { Component } from "react";
import "../stylesheets/pages/_becomeSeller.scss";
import BusinessInformation from "./businessInformation";
// import StoreInformation from "./billing";
import Billing from "./billing";
import Review from "./review";
import axios from "axios";

const levelsData = ["Beginner", "Intermediate", "Advanced"];

class becomeSeller extends Component {
  state = {
    step: 1,
    companyRegistrationNumber: "",
    streetAddress: "",
    addressLine2: "",
    city: "",
    state: "",
    zip: "",
    storeName: "",
    accountName: "",
    routingNumber: "",
    accountNumber: "",
    isErrorCompanyRegistrationNumber: true,
    isErrorStreetAddress: true,
    isErrorAddressLine2: true,
    isErrorCity: true,
    isErrorState: true,
    isErrorZip: true,
    isErrorStoreName: true,
    isErrorAccountName: true,
    isErrorRoutingNumber: true,
    isErrorAccountNumber: true,
    errorMessageCompanyRegistrationNumber: "",
    errorMessageStreetAddress: "",
    errorMessageCity: "",
    errorMessageState: "",
    errorMessageZip: "",
    errorMessageStoreName: "",
    errorMessageAccountName: "",
    errorMessageRoutingNumber: "",
    errorMessageAccountNumber: "",
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (input: any) => (e: any) => {
    this.setState({
      [input]: e.target.value,
    });

    // if (input === "companyRegistrationNumber") {
    //   console.log("In Change " + this.state.companyRegistrationNumber.length);

    //   if (this.state.companyRegistrationNumber.length == 10) {
    //     this.setState({
    //       isErrorCompanyRegistrationNumber: false,
    //     });
    //   }
    // } else if (input === "streetAddress") {
    //   if (this.state.streetAddress.length >= 1) {
    //     this.setState({
    //       isErrorStreetAddress: false,
    //     });
    //   }
    // } else if (input === "city") {
    //   if (this.state.city.length >= 1) {
    //     this.setState({
    //       isErrorCity: false,
    //     });
    //   }
    // } else if (input === "state") {
    //   if (this.state.state.length >= 1) {
    //     this.setState({
    //       isErrorState: false,
    //     });
    //   }
    // } else if (input === "zip") {
    //   if (this.state.zip.length >= 1) {
    //     this.setState({
    //       isErrorZip: false,
    //     });
    //   }
    // }
  };

  validateCompanyRegistrationNumber = () => {
    if (this.state.companyRegistrationNumber.length != 10) {
      this.setState({
        isErrorCompanyRegistrationNumber: true,
        errorMessageCompanyRegistrationNumber:
          "Company Registration Number must be of 10 characters",
      });
      return false;
    } else {
      this.setState({
        isErrorCompanyRegistrationNumber: false,
      });
    }
    return true;
  };

  validateStreetAddress = () => {
    if (this.state.streetAddress.length < 1) {
      this.setState({
        isErrorStreetAddress: true,
        errorMessageStreetAddress: "Street Address is required",
      });
      return false;
    } else {
      this.setState({
        isErrorStreetAddress: false,
      });
    }
    return true;
  };

  validateCity = () => {
    if (this.state.city.length < 1) {
      this.setState({
        isErrorCity: true,
        errorMessageCity: "City is required",
      });
      return false;
    } else {
      this.setState({
        isErrorCity: false,
      });
    }
    return true;
  };

  validateState = () => {
    if (this.state.state.length < 1) {
      this.setState({
        isErrorState: true,
        errorMessageState: "State is required",
      });
      return false;
    } else {
      this.setState({
        isErrorState: false,
      });
    }
    return true;
  };

  validateZip = () => {
    if (this.state.zip.length != 5) {
      this.setState({
        isErrorZip: true,
        errorMessageZip: "Zip code should be 5 digit",
      });
      return false;
    } else {
      this.setState({
        isErrorZip: false,
      });
    }
    return true;
  };

  validateStoreName = () => {
    if (this.state.storeName.length < 1) {
      this.setState({
        isErrorStoreName: true,
        errorMessageStoreName: "Store Name is required",
      });
      return false;
    } else {
      this.setState({
        isErrorStoreName: false,
      });
    }
    return true;
  };

  validateAccountName = () => {
    if (this.state.accountName.length < 1) {
      this.setState({
        isErrorAccountName: true,
        errorMessageAccountName: "Name on Bank Account is required",
      });
      return false;
    } else {
      this.setState({
        isErrorAccountName: false,
      });
    }
    return true;
  };

  validateAccountNumber = () => {
    console.log(this.state.accountNumber.length);

    if (this.state.accountNumber.length <= 7) {
      this.setState({
        isErrorAccountNumber: true,
        errorMessageAccountNumber: "Account Number should be 8 digit",
      });
      return false;
    } else {
      this.setState({
        isErrorAccountNumber: false,
      });
    }
    return true;
  };

  validateRoutingNumber = () => {
    if (this.state.routingNumber.length <= 7) {
      this.setState({
        isErrorRoutingNumber: true,
        errorMessageRoutingNumber: "Routing Number should be 8 digit",
      });
      return false;
    } else {
      this.setState({
        isErrorRoutingNumber: false,
      });
    }
    return true;
  };

  submitData = (e: any) => {
    e.preventDefault();
    axios
      .get("http://localhost:3333/users")
      .then((response) => {
        console.log("In API ", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    alert("Data sent");
  };

  render() {
    const {
      step,
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
      isErrorCompanyRegistrationNumber,
      isErrorStreetAddress,
      isErrorCity,
      isErrorState,
      isErrorZip,
      isErrorStoreName,
      isErrorAccountName,
      isErrorRoutingNumber,
      isErrorAccountNumber,
      errorMessageCompanyRegistrationNumber,
      errorMessageStreetAddress,
      errorMessageCity,
      errorMessageState,
      errorMessageZip,
      errorMessageStoreName,
      errorMessageAccountName,
      errorMessageAccountNumber,
      errorMessageRoutingNumber,
    } = this.state;

    switch (step) {
      case 1:
        return (
          <BusinessInformation
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            companyRegistrationNumber={companyRegistrationNumber}
            streetAddress={streetAddress}
            addressLine2={addressLine2}
            city={city}
            state={state}
            zip={zip}
            storeName={storeName}
            validateCompanyRegistrationNumber={
              this.validateCompanyRegistrationNumber
            }
            validateStreetAddress={this.validateStreetAddress}
            validateCity={this.validateCity}
            validateState={this.validateState}
            validateZip={this.validateZip}
            validateStoreName={this.validateStoreName}
            isErrorCompanyRegistrationNumber={isErrorCompanyRegistrationNumber}
            isErrorStreetAddress={isErrorStreetAddress}
            isErrorCity={isErrorCity}
            isErrorState={isErrorState}
            isErrorZip={isErrorZip}
            isErrorStoreName={isErrorStoreName}
            errorMessageCompanyRegistrationNumber={
              errorMessageCompanyRegistrationNumber
            }
            errorMessageStreetAddress={errorMessageStreetAddress}
            errorMessageCity={errorMessageCity}
            errorMessageState={errorMessageState}
            errorMessageZip={errorMessageZip}
            errorMessageStoreName={errorMessageStoreName}
          />
        );
      case 2:
        return (
          <Billing
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            accountName={accountName}
            routingNumber={routingNumber}
            accountNumber={accountNumber}
            validateAccountName={this.validateAccountName}
            validateAccountNumber={this.validateAccountNumber}
            validateRoutingNumber={this.validateRoutingNumber}
            isErrorAccountName={isErrorAccountName}
            isErrorRoutingNumber={isErrorRoutingNumber}
            isErrorAccountNumber={isErrorAccountNumber}
            errorMessageAccountName={errorMessageAccountName}
            errorMessageAccountNumber={errorMessageAccountNumber}
            errorMessageRoutingNumber={errorMessageRoutingNumber}
          />
        );
      case 3:
        return (
          <Review
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            companyRegistrationNumber={companyRegistrationNumber}
            streetAddress={streetAddress}
            addressLine2={addressLine2}
            city={city}
            state={state}
            zip={zip}
            storeName={storeName}
            accountName={accountName}
            routingNumber={routingNumber}
            accountNumber={accountNumber}
            submitData={this.submitData}
          />
        );

      default:
        return null;
    }
  }
}

export default becomeSeller;
