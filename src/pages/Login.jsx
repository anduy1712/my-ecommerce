import React, { useEffect } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addUser, fetchUser } from "../store/reducers/userSlice";
const Login = () => {
  
  const dispatch = useDispatch();
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
    console.log(values);
  };
  //Effect
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  return (
    <div style={{ padding: 0, backGround: "white" }}>
      <div class="row account__page" style={{ padding: "0 100px" }}>
        <h3 class="col-md-12 account__page-title">MY ACCOUNT</h3>
        <div class="col-md-6 account__page-login">
          <div class="account__page-note">
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
                <div class="form__group">
                  <label for="">Email Address:</label>
                  <input
                    class="form__group-input"
                    type="text"
                    name="email"
                    onChange={handleChange}
                    placeholder="Email address"
                    value={values.email}
                  />
                  <ErrorMessage
                    class="invalid"
                    component="div"
                    name="email"
                  ></ErrorMessage>
                </div>
                <div class="form__group">
                  <label for="">Password:</label>
                  <input
                    class="form__group-input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                  />
                  <ErrorMessage
                    class="invalid"
                    component="div"
                    name="password"
                  ></ErrorMessage>
                </div>
                <button type="submit" class="btnn btn__watch">
                  Login
                </button>
                <div class="form__link">
                  <a href="...">Forgot your password? </a> or{" "}
                  <a href="...">Return to Store</a>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div class="col-md-6 account__page-register">
          <div class="account__page-note">
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
                <div class="form__group">
                  <label for="">First Name:</label>
                  <input
                    class="form__group-input"
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                    name="firstName"
                    value={values.firstName}
                  />
                  <ErrorMessage
                    class="invalid"
                    component="div"
                    name="firstName"
                  ></ErrorMessage>
                </div>
                <div class="form__group">
                  <label for="">Email:</label>
                  <input
                    class="form__group-input"
                    placeholder="Email address"
                    name="email"
                    onChange={handleChange}
                    type="email"
                    value={values.email}
                  />
                  <ErrorMessage
                    class="invalid"
                    component="div"
                    name="email"
                  ></ErrorMessage>
                </div>
                <div class="form__group">
                  <label for="">Password:</label>
                  <input
                    class="form__group-input"
                    placeholder="Password "
                    onChange={handleChange}
                    name="password"
                    type="password"
                    value={values.password}
                  />
                  <ErrorMessage
                    class="invalid"
                    component="div"
                    name="password"
                  ></ErrorMessage>
                </div>
                <button type="submit" class="btnn btn__watch">
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
