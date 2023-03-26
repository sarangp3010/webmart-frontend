import React, { useState, useEffect } from "react";
import axios from "axios";
import "../stylesheets/pages/_admindashboard.scss";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Routes,Route, Link } from "react-router-dom"; 
      

const AdminDashboard = () => {
  
  
  //const [data, setData] = useState({
  const numTotalCategories = 4;
  const numTotalBrands = 5;
  const numTotalUsers = 12;
  const numTotalProducts = 7;
  const [category, setCategory] = useState("");
  
    
  //});
  
  

  return (
    
    <Container>
    <div className="admin-dashboard-container">
      <h2 className="admin-dashboard-title">Admin Dashboard</h2>
      <div className="admin-dashboard-stats-container" >
        <div className="admin-dashboard-stat" onClick={() => setCategory("userTable")} >
          <h3>Number of total Users:</h3>
         <p className="admin-dashboard-stat-value">{numTotalUsers}</p>
        </div>
        <div className="admin-dashboard-stat"  onClick={() => setCategory("productTable")} >
          <h3>Number of total Products:</h3>
          <p className="admin-dashboard-stat-value">{numTotalProducts}</p>
        </div>
        <div className="admin-dashboard-stat"  onClick={() => setCategory("brandTable")} >
          <h3>Number of total Brands:</h3>
          <p className="admin-dashboard-stat-value">{numTotalBrands}</p>
        </div>
      <div className="admin-dashboard-stat" onClick={() => setCategory("categoryTable")}>
          <h3>Number of total Categories:</h3>
          <p className="admin-dashboard-stat-value">{numTotalCategories}</p>
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
