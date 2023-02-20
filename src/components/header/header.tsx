import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/Images/Free_Sample_By_Wix.jpg";
import logo1 from "../../Assets/Images/images.png";
import logo2 from "../../Assets/Images/download.png";
import logo3 from "../../Assets/Images/login.jpg";

import { getProfileActionThunk } from "../../store/profile/profile.actions.async";
import { logout } from "../../store/auth/auth.action";
import TRootState from "../../store/root.types";
import "../../stylesheets/_header.scss";


const StatusBar: React.FC<any> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const profile = useSelector((state: TRootState) => state.profile.profileData);

  /**
   * Get Profile data when component load first time
   */
  useEffect(() => {
    dispatch(getProfileActionThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/login');
    localStorage.removeItem("lToken");
    localStorage.removeItem("lRefreshToken");
  };
  console.log(profile);
  if (profile) {
    
  
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
          <button>
            <img src={logo1} alt="Profile" />
          </button>
        </div>
        <div className="cart">
          <button>
            <img src={logo2} alt="Logo" />
          </button>
        </div>
      </div>
    </header>
  );
  }
else{
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
          <button>
            <img src={logo3} alt="Profile" />
          </button>
        </div>
        <div className="cart">
          <button>
            <img src={logo2} alt="Logo" />
          </button>
        </div>
      </div>
    </header>
  );

}
};

export default StatusBar;
