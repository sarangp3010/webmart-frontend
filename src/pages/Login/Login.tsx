import React, { useEffect, useState } from "react";
import { To, useLocation, useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("login");
  const location = useLocation();

  const handleOnTabClick = (url: string) => {
    navigate(url);
  };

  useEffect(() => {
    console.log(location);
    if (location.pathname === "/signup") {
      setActive("signup");
    } else {
      setActive("login");
    }
  }, [location]);

  return (
    <div className="login-container">
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="card">
          <div className="header">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item text-center">
                <a
                  className={`nav-link ${
                    active === "login" ? "active" : ""
                  } btl`}
                  id="pills-home-tab"
                  data-toggle="pill"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="false"
                  onClick={() => handleOnTabClick("/login")}
                >
                  Login
                </a>
              </li>
              <li className="nav-item text-center">
                <a
                  className={`nav-link ${
                    active === "signup" ? "active" : ""
                  } btl`}
                  id="pills-profile-tab"
                  data-toggle="pill"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="true"
                  onClick={() => handleOnTabClick("/signup")}
                >
                  Signup
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContent">
            <div
              className={`tab-pane fade ${
                active === "login" ? "show active" : ""
              }`}
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="form px-4 pt-5">
                <input
                  type="text"
                  name=""
                  className="form-control"
                  placeholder="Email or Phone"
                />

                <input
                  type="text"
                  name=""
                  className="form-control"
                  placeholder="Password"
                />
                <button className="btn btn-dark btn-block">Login</button>
              </div>
            </div>
            <div
              className={`tab-pane fade ${
                active === "signup" ? "show active" : ""
              }`}
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="form px-4">
                <input
                  type="text"
                  name=""
                  className="form-control"
                  placeholder="First Name"
                />

                <input
                  type="text"
                  name=""
                  className="form-control"
                  placeholder="Last Name"
                />

                <input
                  type="email"
                  name=""
                  className="form-control"
                  placeholder="Email"
                />

                <input
                  type="number"
                  name=""
                  className="form-control"
                  placeholder="Phone Number"
                />

                <input
                  type="password"
                  name=""
                  className="form-control"
                  placeholder="Password"
                />

                <input
                  type="password"
                  name=""
                  className="form-control"
                  placeholder="Confirm Password"
                />

                <button className="btn btn-dark btn-block">Signup</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
