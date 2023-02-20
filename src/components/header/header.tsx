import React from 'react';
import logo from '../../assets/Images/Free_Sample_By_Wix.jpg';
import logo1 from '../../assets/Images/images.png';
import logo2 from '../../assets/Images/download.png';
import '../../stylesheets/_header.scss';

const StatusBar: React.FC<any> = () => {
  return (
    <header>
      <div className="status-bar">
    
        <div className="logo ml-2px">
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
          <button><img src={logo1} alt="Profile" /></button>
        </div>
        <div className="cart">
          <button><img src={logo2} alt="Logo" /></button>
        </div>
      
      </div>
    </header>
  );
};

export default StatusBar;
