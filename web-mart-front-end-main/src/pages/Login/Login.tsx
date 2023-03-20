import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  loginActionThunk,
  signupActionThunk,
} from "../../store/auth/auth.actions.async";
import TRootState from "../../store/root.types";
import { BarsLoader } from "../../components/loader/loader";

const Login = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("login");
  const location = useLocation();

  const handleOnTabClick = (url: string) => {
    navigate(url);
  };

  useEffect(() => {
    if (location.pathname === "/signup") {
      setActive("signup");
    } else {
      setActive("login");
    }
  }, [location]);

  const dispatch = useDispatch();

  const loading = useSelector((state: TRootState) => state.auth.loading);

  /**
   * login validation schema
   */
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid Email Address.")
      .required("Email is required."),
    password: Yup.string().required("Password is required."),
  });

  /**
   * Signup validation schema
   */
  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid Email Address.")
      .required("Email is required."),
    firstName: Yup.string().required("First name is required."),
    lastName: Yup.string().required("Last name is required."),
    password: Yup.string()
      .min(6, "Password is Too short")
      .max(128, "Password is Too long")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password does not match")
      .required("Confirm password is required"),
  });

  /**
   * login submit handler
   */
  const formikLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      try {
        dispatch(
          loginActionThunk(
            {
              email: values.email,
              password: values.password,
            },
            navigate
          ) as any
        );
      } catch (e) {}
    },
  });
  const { errors: loginErrors, touched: loginTouch } = formikLogin;

  const formikSignUp = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      confirmPassword: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      try {
        dispatch(
          signupActionThunk(
            {
              email: values.email,
              password: values.password,
              firstName: values.firstName,
              lastName: values.lastName,
              userType: ["user"],
            },
            navigate
          ) as any
        );
      } catch (e) {}
    },
  });
  const { errors: signupErrors, touched: signupTouched } = formikSignUp;

  return (
    <React.Fragment>
      {loading ? (
        <BarsLoader />
      ) : (
        <React.Fragment>
          <div className="login-container">
            <div className="d-flex justify-content-center align-items-center mt-5">
              <div className="card">
                <div className="header">
                  <ul
                    className="nav nav-pills mb-3"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item text-center">
                      <span
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
                      </span>
                    </li>
                    <li className="nav-item text-center">
                      <span
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
                      </span>
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
                        type="email"
                        name="email"
                        placeholder="Email Id"
                        className="form-control"
                        onChange={formikLogin.handleChange}
                        onBlur={formikLogin.handleBlur}
                        value={formikLogin.values.email}
                        onKeyDown={(event) => {
                          if (event.key === "Enter") {
                            formikLogin.handleSubmit();
                          }
                        }}
                      />
                      {loginErrors.email && loginErrors.email && (
                        <div
                          className="mx-2 text-danger"
                          style={{ marginTop: "-7px", marginBottom: "5px" }}
                        >
                          {loginErrors.email as string}
                        </div>
                      )}

                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="form-control"
                        onChange={formikLogin.handleChange}
                        onBlur={formikLogin.handleBlur}
                        value={formikLogin.values.password}
                        onKeyDown={(event) => {
                          if (event.key === "Enter") {
                            formikLogin.handleSubmit();
                          }
                        }}
                      />
                      {loginErrors.password && loginTouch.password && (
                        <div
                          className="mx-2 text-danger"
                          style={{ marginTop: "-7px", marginBottom: "5px" }}
                        >
                          {loginErrors.password}
                        </div>
                      )}

                      <button
                        onClick={() => formikLogin.handleSubmit()}
                        type="button"
                        className="btn btn-dark btn-block"
                        onKeyDown={(event) => {
                          if (event.key === "Enter") {
                            formikLogin.handleSubmit();
                          }
                        }}
                      >
                        Login
                      </button>
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
                        name="firstName"
                        placeholder="First Name"
                        className="form-control"
                        onChange={formikSignUp.handleChange}
                        onBlur={formikSignUp.handleBlur}
                        value={formikSignUp.values.firstName}
                        onKeyDown={(event) => {
                          if (event.key === "Enter") {
                            formikSignUp.handleSubmit();
                          }
                        }}
                      />
                      {signupErrors.firstName && signupTouched.firstName && (
                        <div
                          className="mx-2 text-danger"
                          style={{ marginTop: "-7px", marginBottom: "5px" }}
                        >
                          {signupErrors.firstName as string}
                        </div>
                      )}

                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className="form-control"
                        onChange={formikSignUp.handleChange}
                        onBlur={formikSignUp.handleBlur}
                        value={formikSignUp.values.lastName}
                        onKeyDown={(event) => {
                          if (event.key === "Enter") {
                            formikSignUp.handleSubmit();
                          }
                        }}
                      />
                      {signupErrors.lastName && signupTouched.lastName && (
                        <div
                          className="mx-2 text-danger"
                          style={{ marginTop: "-7px", marginBottom: "5px" }}
                        >
                          {signupErrors.lastName as string}
                        </div>
                      )}

                      <input
                        type="email"
                        name="email"
                        placeholder="Email Id"
                        className="form-control"
                        onChange={formikSignUp.handleChange}
                        onBlur={formikSignUp.handleBlur}
                        value={formikSignUp.values.email}
                        onKeyDown={(event) => {
                          if (event.key === "Enter") {
                            formikSignUp.handleSubmit();
                          }
                        }}
                      />
                      {signupErrors.email && signupTouched.email && (
                        <div
                          className="mx-2 text-danger"
                          style={{ marginTop: "-7px", marginBottom: "5px" }}
                        >
                          {signupErrors.email as string}
                        </div>
                      )}

                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="form-control"
                        onChange={formikSignUp.handleChange}
                        onBlur={formikSignUp.handleBlur}
                        value={formikSignUp.values.password}
                        onKeyDown={(event) => {
                          if (event.key === "Enter") {
                            formikSignUp.handleSubmit();
                          }
                        }}
                      />
                      {signupErrors.password && signupTouched.password && (
                        <div
                          className="mx-2 text-danger"
                          style={{ marginTop: "-7px", marginBottom: "5px" }}
                        >
                          {signupErrors.password}
                        </div>
                      )}

                      <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className="form-control"
                        onChange={formikSignUp.handleChange}
                        onBlur={formikSignUp.handleBlur}
                        value={formikSignUp.values.confirmPassword}
                        onKeyDown={(event) => {
                          if (event.key === "Enter") {
                            formikSignUp.handleSubmit();
                          }
                        }}
                      />
                      {signupErrors.confirmPassword &&
                        signupTouched.confirmPassword && (
                          <div
                            className="mx-2 text-danger"
                            style={{ marginTop: "-7px", marginBottom: "5px" }}
                          >
                            {signupErrors.confirmPassword}
                          </div>
                        )}

                      <button
                        onClick={() => formikSignUp.handleSubmit()}
                        type="button"
                        className="btn btn-primary btn-block btn-lg"
                        onKeyDown={(event) => {
                          if (event.key === "Enter") {
                            formikSignUp.handleSubmit();
                          }
                        }}
                      >
                        Sign Up
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Login;
