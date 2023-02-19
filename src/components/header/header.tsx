import React from 'react';
import logo from '../../Assets/Images/Free_Sample_By_Wix.jpg'
interface StatusBarProps {
  logo: string;
  name: string;
  profileImage: string;
  cartItems: number;
}

const StatusBar: React.FC<StatusBarProps> = ({ logo, name, profileImage, cartItems }) => {
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
        <img src={profileImage} alt="Profile" />
      </div>
      <div className="cart">
        <i className="fas fa-shopping-cart"></i>
        <span>{cartItems}</span>
      </div>
    </div>
  );
};

export default StatusBar;
