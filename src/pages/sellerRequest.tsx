import React, { useState, useEffect } from "react";
import axios from "axios";
import "../stylesheets/pages/_admindashboard.scss";
import { Container } from "react-bootstrap";

const SellerRequest = (request: any) => {
  console.log("In Seller Reuqest personal", request);
  console.log("In Seller Reuqest personal", request.request.accountName);

  return <Container>{request.request.accountName}</Container>;
};

export default SellerRequest;
