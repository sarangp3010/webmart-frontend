import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import logo from "../../assets/Images/Free_Sample_By_Wix.jpg";
import logo2 from "../../assets/Images/download.png";
import logo3 from "../../assets/Images/images.png";

import { getProfileActionThunk } from "../../store/profile/profile.actions.async";
import { logout } from "../../store/auth/auth.action";
import TRootState from "../../store/root.types";
import "../../stylesheets/_header.scss";
import { refreshProfileAction } from "../../store/profile/profile.action";

const StatusBar: React.FC<any> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user_Type, setUser_Type] = useState([]);

  const profile = useSelector((state: TRootState) => state.profile.profileData);
  const refreshProfile = useSelector(
    (state: TRootState) => state.profile.refreshProfile
  );
  const isUserOrSeller = profile
    ? profile.userType.includes("admin") || profile.userType.includes("seller")
    : false;
  const isUserOrSellerUrl = profile
    ? profile.userType.includes("admin") || profile.userType.includes("seller")
      ? "/products/new"
      : "/become-seller"
    : "";

  /**
   * Get Profile data when component load first time
   */
  useEffect(() => {
    dispatch(getProfileActionThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile?.id]);

  useEffect(() => {
    if (refreshProfile) {
      dispatch(getProfileActionThunk());
      dispatch(refreshProfileAction(false));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshProfile]);

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login");
    localStorage.removeItem("lToken");
    localStorage.removeItem("lRefreshToken");
  };

  return (
    <header>
      <div className="status-bar">
        <div className="logo mx-4">
          <img src={logo} alt="Logo" />
        </div>
        <div className="name">
          <Link
            to={"/home"}
            className="text-muted"
            style={{ textDecoration: "none" }}
          >
            <h1 style={{ minWidth: "188px" }}>{"WebMart"}</h1>
          </Link>
        </div>
        <div className="search-area">
          <input type="text" placeholder="Search" />
          <Link
            to={"/afterSearch"}
            className="btn btn-primary"
            style={{ padding: "5px 5px", borderRadius: "12px" }}
          >
            Search
          </Link>
        </div>
        <div className="profile" style={{ marginLeft: "40px" }}>
          {profile && profile?.id ? (
            <>
              <Dropdown align="end" className="btn-group">
                <Dropdown.Toggle id="dropdown-basic">
                  <img
                    src={logo3}
                    className="w-35 h-35 min-w-35 rounded-circle"
                    alt="John Smith"
                    height="35px"
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu
                  className="profile-dropdown"
                  style={{
                    animationName: "slideUpIn!important",
                    position: "fixed",
                  }}
                >
                  <div className="dropdown-header">
                    <div className="media d-user">
                      <h5>{profile?.firstName || "-"}</h5>
                      <span style={{ fontSize: ".6875rem" }}>
                        {profile?.email || "-"}
                      </span>
                    </div>
                  </div>
                  {profile?.firstName === "admin" && (
                  <Dropdown.Item onClick={() => navigate("/admin-dashboard")}>
                  <i className="icon dripicons-lock"></i> Admin DashBoard
                  </Dropdown.Item>
                  )}
                  <Dropdown.Item onClick={() => navigate(isUserOrSellerUrl)}>
                    <i className="icon dripicons-lock"></i>{" "}
                    {isUserOrSeller ? "Add Product" : "Become a seller"}
                  </Dropdown.Item>
                  <Dropdown.Item onClick={logoutHandler}>
                    <i className="icon dripicons-lock"></i> Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {/* <p style={{ marginLeft: "10px" , marginTop: "17px" }}>{`Hello, ${profile?.firstName || ""} ${profile?.lastName || ""} `}</p> */}
            </>
          ) : (
            <p
              style={{
                marginLeft: "290px",
                marginTop: "17px",
                cursor: "pointer",
              }}
              onClick={() => navigate("/login")}
            >
              Login
            </p>
          )}
        </div>
        <div className="cart">
          <button onClick={() => navigate("/cart")}>
            <img src={logo2} alt="Logo" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default StatusBar;
