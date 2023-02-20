import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/Images/Free_Sample_By_Wix.jpg";
import logo2 from "../../Assets/Images/download.png";

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
    navigate("/login");
    localStorage.removeItem("lToken");
    localStorage.removeItem("lRefreshToken");
  };

  return (
    <header>
      <div className="status-bar">
        <div className="logo ml-2px">
          <img src={logo} alt="Logo" />
        </div>
        <div className="name">
          <Link
            to={"/home"}
            className="text-muted"
            style={{ textDecoration: "none" }}
          >
            <h1>{"WebMart"}</h1>
          </Link>
        </div>
        <div className="search-area">
          <input type="text" placeholder="Search" />
          <a
            href="/afterSearch"
            className="btn btn-primary"
            style={{ padding: "5px 5px", borderRadius: "12px" }}
          >
            Search
          </a>
        </div>
        <div className="profile" style={{ marginLeft: "300px"}}>
          {profile ? (
            <>
              <p style={{ marginLeft: "10px" , marginTop: "17px" }}>{`Hello, ${profile?.firstName || ""} ${profile?.lastName || ""} `}</p>
            </>
          ) : (
            <p style={{ marginLeft: "10px" , marginTop: "17px", cursor: "pointer" }} onClick={() => navigate('/login')}>
              Login
            </p>
          )}
        </div>
        <div className="cart">
          <button>
            <img src={logo2} alt="Logo" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default StatusBar;
