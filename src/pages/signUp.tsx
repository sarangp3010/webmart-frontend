import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

import { signupActionThunk } from "../store/auth/auth.actions.async";
import TRootState from "../store/root.types";
import { BarsLoader } from "../../src/components/loader/loader";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loading = useSelector((state: TRootState) => state.auth.loading);

  /**
   * login validation schema
   */
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("The email must be a valid email address.")
      .required("The email field is required."),
    password: Yup.string().required("The password field is required."),
    firstName: Yup.string().required("The Full Name field is required."),
    lastName: Yup.string().required("The Full Name field is required."),
  });

  /**
   * login submit handler
   */
  const formikLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
    // validationSchema: LoginSchema,
    onSubmit: (values) => {
      console.log("values", values);
      
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

  const { errors, touched } = formikLogin;

  return (
    <React.Fragment>
      {loading ? (
        <BarsLoader />
      ) : (
        <div className="main-container d-flex align-items-center justify-content-center">
          <div className="login-box">
            <div className="login-logo">
              {/* <img src={LogoColor} alt="Logo" /> */}
            </div>
            <div className="login-box-body">
              <h1 className="text-center mb-3 font-weight-500">Login</h1>
              <p className="text-center mb-4">
                Enter your credentials to access the panel
              </p>
              <form>
                <div className="form-group">
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
                  {errors.email && touched.email && (
                    <div className="text-danger">{errors.email as string}</div>
                  )}
                </div>
                <div className="form-group">
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
                  {errors.password && touched.password && (
                    <div className="text-danger">{errors.password}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="form-control"
                    onChange={formikLogin.handleChange}
                    onBlur={formikLogin.handleBlur}
                    value={formikLogin.values.firstName}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        formikLogin.handleSubmit();
                      }
                    }}
                  />
                  {errors.firstName && touched.firstName && (
                    <div className="text-danger">{errors.firstName as string}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="First Name"
                    className="form-control"
                    onChange={formikLogin.handleChange}
                    onBlur={formikLogin.handleBlur}
                    value={formikLogin.values.lastName}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        formikLogin.handleSubmit();
                      }
                    }}
                  />
                  {errors.lastName && touched.lastName && (
                    <div className="text-danger">{errors.lastName as string}</div>
                  )}
                </div>
                <button
                  onClick={() => formikLogin.handleSubmit()}
                  type="button"
                  className="btn btn-primary btn-block btn-lg"
                  onKeyDown={(event) => {
                    console.log("Called");
                    
                    if (event.key === "Enter") {
                      formikLogin.handleSubmit();
                    }
                  }}
                >
                  Sign Up
                </button>
              </form>
            </div>
            <div className="login-box-footer d-flex justify-content-between">
              <div className="password-reset-link">
                <Link className="text-accent-custom" to="/forgot-password">
                  Forgot Password?
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default SignUp;
