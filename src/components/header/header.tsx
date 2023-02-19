import React from 'react';
import logo from '../../Assets/Images/Free_Sample_By_Wix.jpg';
import logo1 from '../../Assets/Images/images.png';
import logo2 from '../../Assets/Images/download.png';

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
        <img src={logo1} alt="Profile" />
      </div>
      <div className="cart">
        <img src={logo2} alt="Logo" />
      </div>
    </div>
  );
};

export default StatusBar;
