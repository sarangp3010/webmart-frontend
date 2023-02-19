import React from 'react';
import logo from '../../assets/Images/Free_Sample_By_Wix.jpg';

const StatusBar: React.FC<any> = () => {
  return (
    <div className="status-bar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="name">
        <h1>{"WebMart"}</h1>
      </div>
      <div className="search-area">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
      <div className="profile">
        <img src={logo} alt="Profile" />
      </div>
      <div className="cart">
        <i className="fas fa-shopping-cart"></i>
        <span>{5}</span>
      </div>
    </div>
  );
};

export default StatusBar;
