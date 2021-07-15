import React, { useEffect } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  authSelector,
  fetchUser,
  login,
} from "../store/reducers/userSlice";
import { Redirect, useHistory } from "react-router-dom";
const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector(authSelector);
  //Validate Sign up
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
  });
  //Validate Sign up
  const validateSignIn = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
  });
  //Function
  const handleSubmitSignUp = (values) => {
    dispatch(addUser(values));
  };
  const handleSubmitSignIn = (values) => {
    dispatch(login(values));
  };
  //Effect
  useEffect(() => {
    var user = JSON.parse(localStorage.getItem("user"));
    if (user !== null) {
      history.push("/");
    } else {
      dispatch(fetchUser());
    }
  }, []);
  useEffect(() => {
    if (auth) {
      history.push("/");
    }
  }, [auth]);
  return (
    <div style={{ padding: 0, backGround: "white" }}>
      <div className="row account__page" style={{ padding: "0 100px" }}>
        <h3 className="col-md-12 account__page-title">MY ACCOUNT</h3>
        <div className="col-md-6 account__page-login">
          <div className="account__page-note">
            <p>RETURNING CUSTOMER</p>
            <span>I am a returning customer</span>
          </div>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={handleSubmitSignIn}
            validationSchema={validateSignIn}
          >
            {({ values, handleChange }) => (
              <Form>
                <div className="form__group">
                  <label>Email Address:</label>
                  <input
                    className="form__group-input"
                    type="text"
                    name="email"
                    onChange={handleChange}
                    placeholder="Email address"
                    value={values.email}
                  />
                  <ErrorMessage
                    className="invalid"
                    component="div"
                    name="email"
                  ></ErrorMessage>
                </div>
                <div className="form__group">
                  <label>Password:</label>
                  <input
                    className="form__group-input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                  />
                  <ErrorMessage
                    className="invalid"
                    component="div"
                    name="password"
                  ></ErrorMessage>
                </div>
                <button type="submit" className="btnn btn__watch">
                  Login
                </button>
                <div className="form__link">
                  <a href="...">Forgot your password? </a> or{" "}
                  <a href="...">Return to Store</a>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="col-md-6 account__page-register">
          <div className="account__page-note">
            <p>NEW CUSTOMER</p>
            <span
              style={{ display: "block", margin: "10px 0", fontWeight: 400 }}
            >
              Register Account
            </span>
            <span>
              By creating an account you will be able to shop faster, be up to
              date on an order's status, and keep track of the orders you have
              previously made.
            </span>
          </div>
          <Formik
            initialValues={{
              firstName: "",
              email: "",
              password: "",
            }}
            validationSchema={validate}
            onSubmit={handleSubmitSignUp}
          >
            {({ values, handleChange }) => (
              <Form>
                <div className="form__group">
                  <label>First Name:</label>
                  <input
                    className="form__group-input"
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                    name="firstName"
                    value={values.firstName}
                  />
                  <ErrorMessage
                    className="invalid"
                    component="div"
                    name="firstName"
                  ></ErrorMessage>
                </div>
                <div className="form__group">
                  <label>Email:</label>
                  <input
                    className="form__group-input"
                    placeholder="Email address"
                    name="email"
                    onChange={handleChange}
                    type="email"
                    value={values.email}
                  />
                  <ErrorMessage
                    className="invalid"
                    component="div"
                    name="email"
                  ></ErrorMessage>
                </div>
                <div className="form__group">
                  <label>Password:</label>
                  <input
                    className="form__group-input"
                    placeholder="Password "
                    onChange={handleChange}
                    name="password"
                    type="password"
                    value={values.password}
                  />
                  <ErrorMessage
                    className="invalid"
                    component="div"
                    name="password"
                  ></ErrorMessage>
                </div>
                <button type="submit" className="btnn btn__watch">
                  Create an account
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
