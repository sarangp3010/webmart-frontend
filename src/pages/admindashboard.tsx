import React, { useState, useEffect } from "react";
import axios from "axios";
import "../stylesheets/pages/_admindashboard.scss";
import { Container } from "react-bootstrap";
import {
  useNavigate,
} from "react-router-dom";
import { API } from "../middleware/middleware";

const AdminDashboard = () => {
  //const [data, setData] = useState({
  const [categories, setCategories] = useState(0);
  const [brands, setBrands] = useState(0);
  const [users, setUsers] = useState(0);
  const [products, setProducts] = useState(0);
  const [seller, setSeller] = useState(0);
  const [pendingRequests, setPendingRequests] = useState(0);
  const [category, setCategory] = useState("");
  const [orders, setOrders] = useState(0);
  const [modificationRequests, setModificationRequests] = useState(0);
  const navigate = useNavigate();

  const getCount = () => {
    API
      .get("/dashboard/count")
      .then((response) => {
        setCategories(response.data.categoryCount);
        setBrands(response.data.brandsCount);
        setUsers(response.data.userCount);
        setSeller(response.data.sellerCount);
        setPendingRequests(response.data.pendingRequest);
        setProducts(response.data.productsCount);
        setOrders(response.data.ordersCount);
        setModificationRequests(response.data.modificationRequest);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCount();
  }, []);

  return (
    <Container>
      <div className="admin-dashboard-container">
        <h2 className="admin-dashboard-title">Admin Dashboard</h2>
        <div className="admin-dashboard-stats-container">
          <div
            className="admin-dashboard-stat cursor-pointer"
            onClick={() => navigate("/customers/list")}
          >
            <h3>Number of total Users:</h3>
            <p className="admin-dashboard-stat-value">{users}</p>
          </div>
          <div
            className="admin-dashboard-stat"
            onClick={() => navigate("/products/list")}
          >
            <h3>Number of total Products:</h3>
            <p className="admin-dashboard-stat-value">{products}</p>
          </div>
          <div
            className="admin-dashboard-stat"
            onClick={() => navigate("/brands")}
          >
            <h3>Number of total Brands:</h3>
            <p className="admin-dashboard-stat-value">{brands}</p>
          </div>
          <div
            className="admin-dashboard-stat"
            onClick={() => navigate("/category/list")}
          >
            <h3>Number of total Categories:</h3>
            <p className="admin-dashboard-stat-value">{categories}</p>
          </div>
          <div
            className="admin-dashboard-stat"
            onClick={() => navigate("/seller/list")}
          >
            <h3>Number of Sellers</h3>
            <p className="admin-dashboard-stat-value">{seller}</p>
          </div>
          <div
            className="admin-dashboard-stat"
            onClick={() => navigate("/orders/list")}
          >
            <h3>Number of Orders</h3>
            <p className="admin-dashboard-stat-value">{orders}</p>
          </div>
          <div
            className="admin-dashboard-stat"
            onClick={() => navigate("/pending-seller-request")}
          >
            <h3>Number of Pending Seller Requests:</h3>
            <p className="admin-dashboard-stat-value">{pendingRequests}</p>
          </div>
          <div
            className="admin-dashboard-stat"
            onClick={() => navigate("/modificationRequests")}
          >
            <h3>Number of Product Modification Requests:</h3>
            <p className="admin-dashboard-stat-value">{modificationRequests}</p>
          </div>
        </div>
      </div>
      <div className="admin-dashboard-container">
        {category === "categoryTable" && (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Category_1</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Category_2</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Category_3</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Category_4</td>
              </tr>
            </tbody>
          </table>
        )}
        {category === "userTable" && (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">LastName</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>shine</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Tamsin </td>
                <td>Valenzuela</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Dulcie</td>
                <td>Matthews</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Georgie</td>
                <td>Mcknight</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>Lorraine</td>
                <td>Case</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>Loui</td>
                <td>Lambert</td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>Jakub</td>
                <td>Richard</td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>Larry</td>
                <td>Elliott</td>
              </tr>
              <tr>
                <th scope="row">11</th>
                <td>Austin</td>
                <td>Phelps</td>
              </tr>
              <tr>
                <th scope="row">12</th>
                <td>Esme</td>
                <td>Castaneda</td>
              </tr>
            </tbody>
          </table>
        )}
        {category === "productTable" && (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Product</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Product_1</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Product_2</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Product_3</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Product_4</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Product_5</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Product_6</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>Product_7</td>
              </tr>
            </tbody>
          </table>
        )}
        {category === "brandTable" && (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Brand</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Brand_1</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Brand_2</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Brand_3</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Brand_4</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Brand_5</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </Container>
  );
};

export default AdminDashboard;
