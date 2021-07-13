import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  amount,
  cartquantitySelector,
  cartSelector,
} from "../store/reducers/cartSlice";

const Header = () => {
  //GET QUANTITY
  const quantity = useSelector(cartquantitySelector);
  //GET CART
  const cart = useSelector(cartSelector);
  //DISPATCH
  const dispatch = useDispatch();
  //USE EFFECT
  useEffect(() => {
    dispatch(amount());
  }, [cart]);
  return (
    <header>
      <nav
        style={{ backgroundColor: "white" }}
        className="navbar navbar-expand-lg navbar-light  "
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="index.html">
          <img
            className="navbar-icon"
            src="https://cdn.shopify.com/s/files/1/0264/5000/1980/files/lw-logo-b.png?v=1566992556"
            alt=""
          />
        </a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/products" className="nav-link">
                Mens
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/login" className="nav-link">
                Account
              </Link>
            </li>
          </ul>
          <div className="navbar__right">
            {/* <div className="navbar__right-account">
            <span className="navbar_acc">{{isSignedIn ? email : 'ACCOUNT'}} </span>
            <i className="navbar__right-item far fa-user"></i>
            <span (click)="logOut()" className="navbar_acc">{{isSignedIn ? 'Logout' : ''}} </span>
  
          </div> */}
            <div className="shoppingCart">
              <Link to="/cart">
                <i className="navbar__right-item fas fa-shopping-cart"></i>
                <span className="numberCart">{quantity}</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;