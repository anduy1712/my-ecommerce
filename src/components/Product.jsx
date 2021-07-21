import React, { useEffect } from "react";
import {
  addCart,
  amount,
  cartSelector,
  editCart,
  getCart,
  getItemCart,
} from "../store/reducers/cartSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { productsSelector } from "../store/reducers/productSlice";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Product = ({ id, name, price, img, category }) => {
  const products = useSelector(productsSelector);

  let cart = useSelector(cartSelector);
  const dispatch = useDispatch();

  const history = useHistory();
  //Toast

  //function

  const addtoCart = (id) => {
    const user = JSON.parse(localStorage.getItem("user"));

    //CHECK USER
    if (user !== null) {
      console.log(cart);
      toast.success("Product added to cart", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      //Get Product in Product List
      let product = products.filter((item) => {
        return item.id === id;
      });
      let carts = JSON.parse(localStorage.getItem("carts"));
      if (carts !== null) {
        const { id } = product[0];
        let isSame = false;
        carts.forEach((item) => {
          if (item.id === id) {
            isSame = true;
            item.amount += 1;
          }
        });
        localStorage.setItem("carts", JSON.stringify(carts));
        if (!isSame) {
          product = product.map((item) => {
            return { ...item, amount: 1 };
          });
          carts = [...carts, ...product];
          localStorage.setItem("carts", JSON.stringify(carts));
        }
      } else {
        product = product.map((item) => {
          return { ...item, amount: 1 };
        });
        localStorage.setItem("carts", JSON.stringify(product));
      }
      dispatch(addCart(product));
      dispatch(amount());
    } else {
      toast.error("Please login to buy", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // history.push("/login");
    }
  };

  return (
    <div className="col-men col-md-3 col-sm-6">
      <div className="card_men">
        <div className="card_men-images">
          <img className="card_men-img-item" src={img} alt="" />
          <p className="card_men-sold">Sold Out</p>
          <div className="card_men-listicon">
            <i className="card_men-icon1 far fa-heart"></i>
            <Link to={`/product/${id}`}>
              <i className="card_men-icon2 far fa-eye"></i>
            </Link>
            <i className="card_men-icon3 fas fa-sync-alt"></i>
          </div>
          <p onClick={addtoCart.bind(this, id)} className="card_select">
            Select Options
          </p>
        </div>
        <div className="card_men-profile">
          <p className="card_men-product">{category}</p>
          <h3 className="card_men-producttitle">{name}</h3>
          <div className="card_men-star product_profile-star">
            <i className="product_icon fas fa-star"></i>
            <i className="product_icon fas fa-star"></i>
            <i className="product_icon fas fa-star"></i>
            <i className="product_icon fas fa-star"></i>
            <i className="product_icon-inactive fas fa-star"></i>
          </div>
          <p className="card_men-price">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
