import React, { useState, useEffect } from "react";
import axios from "axios";
import "../stylesheets/pages/_admindashboard.scss";
import { Container, Button } from "react-bootstrap";
import SellerRequest from "./sellerRequest";

const PendingSellerRequest = () => {
  const [data, setData] = useState([]);
  const [showRequest, setShowRequest] = useState(false);
  const [request, setRequest] = useState({});

  const getPendingRequest = () => {
    axios
      .get("http://localhost:3333/users/pendingSellerRequest")
      .then((response) => {
        setData(response.data.pendingRequest || []);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleRequest = (item: any) => {
    setShowRequest(true);
    setRequest(item);
  };

  const setRequestToggle = () => {
    setShowRequest(false);
    setRequest({});
    getPendingRequest();
  };

  useEffect(() => {
    getPendingRequest();
  }, []);

  return (
    <div>
      {showRequest ? (
        <SellerRequest request={request} setRequestToggle={setRequestToggle} />
      ) : (
        <Container>
          <table className="table" style={{ width: "100%" }}>
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Email</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item: any) => (
                <tr key={item.user.id}>
                  <th scope="row">{item.user.id}</th>
                  <td>{item.user.email}</td>
                  <td>{item.user.firstName}</td>
                  <td>{item.user.lastName}</td>
                  <td>
                    <Button
                      variant="warning"
                      onClick={() => handleRequest(item)}
                    >
                      View Request
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Container>
      )}
    </div>
  );
};

export default PendingSellerRequest;
