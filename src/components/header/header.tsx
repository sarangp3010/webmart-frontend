import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import logo from "../../Assets/Images/Free_Sample_By_Wix.jpg";
import logo2 from "../../Assets/Images/download.png";
import logo3 from "../../Assets/Images/images.png";

import { getProfileActionThunk } from "../../store/profile/profile.actions.async";
import { logout } from "../../store/auth/auth.action";
import TRootState from "../../store/root.types";
import "../../stylesheets/_header.scss";
import { refreshProfileAction } from "../../store/profile/profile.action";

const StatusBar: React.FC<any> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const profile = useSelector((state: TRootState) => state.profile.profileData);
  const refreshProfile = useSelector(
    (state: TRootState) => state.profile.refreshProfile
  );

  const isSellerRequested = profile?.sellerStatus;

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
        {!profile?.userType?.includes("admin") ? (
          <div className="coins">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <defs>
                <linearGradient
                  id="linear-gradient"
                  x1="256"
                  y1="460.43"
                  x2="256"
                  y2="11.91"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#bd7f26" />
                  <stop offset="1" stop-color="#e3ca75" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-2"
                  x1="256"
                  y1="449.56"
                  x2="256"
                  y2="22.68"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#d1ab5c" />
                  <stop offset="0.13" stop-color="#dbaf57" />
                  <stop offset="0.42" stop-color="#f2ca64" />
                  <stop offset="0.77" stop-color="#f8e493" />
                  <stop offset="1" stop-color="#fbf2ac" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-3"
                  x1="1902.08"
                  y1="5236.76"
                  x2="1902.08"
                  y2="4882.02"
                  gradientTransform="translate(2158.08 5293.93) rotate(180)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#bd7f26" />
                  <stop offset="1" stop-color="#fbf2ac" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-4"
                  x1="1902.08"
                  y1="5228.17"
                  x2="1902.08"
                  y2="4890.54"
                  gradientTransform="translate(2158.08 5293.93) rotate(180)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#ffdb5c" />
                  <stop offset="1" stop-color="#e5b151" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-5"
                  x1="256"
                  y1="372.53"
                  x2="256"
                  y2="113.06"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#bd7f26" />
                  <stop offset="1" stop-color="#bd7f26" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-6"
                  x1="256"
                  y1="105.52"
                  x2="256"
                  y2="365"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#f2c54b" />
                  <stop offset="1" stop-color="#d89837" />
                </linearGradient>
              </defs>
              <title>dollar_coin</title>
              <image
                width="3227"
                height="470"
                transform="translate(38.88 427.91) scale(0.13 0.16)"
                opacity="0.4"
              />
              <path
                d="M256,459.52c123.53,0,224.26-100.67,224.26-224.13C480.26,111.66,379.53,11,256,11S31.74,111.66,31.74,235.39C31.74,358.85,132.48,459.52,256,459.52Z"
                fill-rule="evenodd"
                fill="url(#linear-gradient)"
              />
              <path
                d="M256,448.7c117.57,0,213.44-95.81,213.44-213.31,0-117.76-95.87-213.57-213.44-213.57S42.56,117.63,42.56,235.39C42.56,352.89,138.44,448.7,256,448.7Z"
                fill-rule="evenodd"
                fill="url(#linear-gradient-2)"
              />
              <path
                d="M256,57.89c-97.7,0-177.37,79.62-177.37,177.27C78.63,333,158.3,412.63,256,412.63S433.37,333,433.37,235.16C433.37,137.51,353.7,57.89,256,57.89Z"
                fill-rule="evenodd"
                fill="url(#linear-gradient-3)"
              />
              <path
                d="M256,66.45c-93,0-168.81,75.78-168.81,168.71C87.19,328.3,163,404.07,256,404.07S424.81,328.3,424.81,235.16C424.81,142.23,349,66.45,256,66.45Z"
                fill-rule="evenodd"
                fill="url(#linear-gradient-4)"
              />
              <path
                d="M189.74,282.81h13.42c15.66,0,15.41,2.48,22.62,14.66,8,13.42,26.1,21.37,45.48,13.17,9.69-4.22,17.15-17.14,8.7-32.06-8-14.41-26.59-16.4-45-20.88-19.89-5-40.76-11.68-51-26.84-15.66-23.86-15.41-57.66,17.4-78.29,13.17-8.21,26.6-13.42,41.76-14.91V123.25c0-10.69,3-10.19,12.92-10.19,4.48,0,8,.24,9.95,1.74s2.23,4.47,2.23,9.19v13.92a62.1,62.1,0,0,1,9.44,1.49c27.34,4.72,45.23,15.41,53.43,43.24,4.23,14.17-2.73,17.15-15.65,17.15H295.62c-12.43,0-14.66-3-17.89-14.41-1.49-4.72-3.73-8.2-7.45-10.44-15.91-9.69-43.75-1.74-42.5,19.63,1,14.17,20.62,19.38,40.76,25.6,26.1,7.7,53.69,15.16,64.62,39.76,11.68,26.6,4.47,56.42-25.1,73.32a106.88,106.88,0,0,1-39.77,12.92v14.66c0,10.69-2,11.68-11.93,11.68-10.68,0-13.17,0-13.17-11.68V346.43a145.16,145.16,0,0,1-20.14-3c-27.09-5.71-40.76-17.64-48.21-43.74C170.86,285.29,176.08,282.81,189.74,282.81Z"
                fill-rule="evenodd"
                fill="url(#linear-gradient-5)"
              />
              <path
                d="M189.74,267.74h13.42c15.66,0,15.41,2.48,22.62,14.66,8,13.42,26.1,21.37,45.48,13.17,9.69-4.22,17.15-17.14,8.7-32.06-8-14.41-26.59-16.4-45-20.88-19.89-5-40.76-11.68-51-26.84-15.66-23.86-15.41-57.66,17.4-78.29,13.17-8.21,26.6-13.42,41.76-14.91V108.18c0-10.69,3-10.19,12.92-10.19,4.48,0,8,.24,9.95,1.74s2.23,4.47,2.23,9.19v13.92a62.1,62.1,0,0,1,9.44,1.49c27.34,4.72,45.23,15.41,53.43,43.24,4.23,14.17-2.73,17.15-15.65,17.15H295.62c-12.43,0-14.66-3-17.89-14.41-1.49-4.72-3.73-8.2-7.45-10.44-15.91-9.69-43.75-1.74-42.5,19.63,1,14.17,20.62,19.38,40.76,25.6,26.1,7.7,53.69,15.16,64.62,39.76,11.68,26.6,4.47,56.42-25.1,73.32a106.88,106.88,0,0,1-39.77,12.92v14.66c0,10.69-2,11.68-11.93,11.68-10.68,0-13.17,0-13.17-11.68V331.37a145.16,145.16,0,0,1-20.14-3c-27.09-5.71-40.76-17.64-48.21-43.74C170.86,270.22,176.08,267.74,189.74,267.74Z"
                fill="#fbf2ac"
                fill-rule="evenodd"
              />
              <path
                d="M189.74,275.27h13.42c15.66,0,15.41,2.48,22.62,14.66,8,13.42,26.1,21.37,45.48,13.17C281,298.89,288.41,286,280,271c-8-14.41-26.59-16.4-45-20.88-19.89-5-40.76-11.68-51-26.84-15.66-23.86-15.41-57.66,17.4-78.29,13.17-8.21,26.6-13.42,41.76-14.91V115.71c0-10.69,3-10.19,12.92-10.19,4.48,0,8,.24,9.95,1.74s2.23,4.47,2.23,9.19v13.92a62.1,62.1,0,0,1,9.44,1.49c27.34,4.72,45.23,15.41,53.43,43.24,4.23,14.17-2.73,17.15-15.65,17.15H295.62c-12.43,0-14.66-3-17.89-14.41-1.49-4.72-3.73-8.2-7.45-10.44-15.91-9.69-43.75-1.74-42.5,19.63,1,14.17,20.62,19.38,40.76,25.6,26.1,7.7,53.69,15.16,64.62,39.76,11.68,26.6,4.47,56.42-25.1,73.32a106.88,106.88,0,0,1-39.77,12.92v14.66c0,10.69-2,11.68-11.93,11.68-10.68,0-13.17,0-13.17-11.68V338.9a145.16,145.16,0,0,1-20.14-3c-27.09-5.71-40.76-17.64-48.21-43.74C170.86,277.76,176.08,275.27,189.74,275.27Z"
                fill-rule="evenodd"
                fill="url(#linear-gradient-6)"
              />
            </svg>
            <span className="credit">{profile?.totalCredits || 0}</span>
          </div>
        ) : null}
        <div className="profile">
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
                    {isSellerRequested != null && !isSellerRequested
                      ? "Seller requested"
                      : isUserOrSeller
                      ? "Add Product"
                      : "Become a seller"}
                  </Dropdown.Item>

                  {isSellerRequested && isUserOrSeller ? (
                    <Dropdown.Item onClick={() => navigate("/become-seller")}>
                      <i className="icon dripicons-lock"></i> Update seller
                    </Dropdown.Item>
                  ) : null}

                  {profile?.userType?.includes("admin") ? (
                    <Dropdown.Item onClick={() => navigate("/brands")}>
                      <i className="icon dripicons-lock"></i> {"Brands"}
                    </Dropdown.Item>
                  ) : null}

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
