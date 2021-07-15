import React, { useEffect, useState } from "react";
import Product from "../components/Product";

import {
  getCate,
  getProducts,
  productsSelector,
} from "../store/reducers/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Men = () => {
  const { nameCate } = useParams();
  //Reducer
  const products = useSelector(productsSelector);
  const dispatch = useDispatch();
  //State
  const [loading, setLoading] = useState(false);
  const items = products.map((product) => {
    return (
      <Product
        key={product.id}
        id={product.id}
        name={product.title}
        price={product.price}
        img={product.image}
        category={product.category}
        amount={1}
      />
    );
  });
  //Effect
  useEffect(() => {
    setLoading(true);
    if (nameCate) {
      dispatch(getCate(nameCate));
      console.log("get cate");
    } else {
      dispatch(getProducts());
      console.log("get products");
    }
    setLoading(false);
  }, [dispatch, nameCate]);
  if (loading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  } else {
    return (
      <div
        style={{ padding: 0, background: "white" }}
        className="container-fluid"
      >
        <div className="row">
          <div className="col-md-12">
            <h2 className="men__heading">MENS</h2>
          </div>
          <div className="col-md-12">
            <p className="men__content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              pariatur saepe explicabo odio nisi dicta, quae eaque quam. Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Temporibus,
              ratione?
            </p>
          </div>
        </div>
        <div className="navbar__options row">
          <div className="col-md-4 col-6 ">
            <div className="icon_men">
              <i className="fas fa-sliders-h"></i>
              <p>Shop bye</p>
            </div>
          </div>
          <div className="col-md-4 col-6 ">
            <div className="icon_sapxep">
              <p>view as</p>
              <div className="icon_sapxep-item">
                <i className="fas fa-th"></i>
                <div className="icon-mode-list">
                  <div className="icon-bar"></div>
                  <div className="icon-bar"></div>
                  <div className="icon-bar"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar__options-set col-md-4 col-12 ">
            <div className="select_men">
              <p className="select_men-title">Show</p>
              <div className="show_select">
                <p className="show_select-name">12 Show</p>
                <i className="fa-select fa fa-angle-down"></i>
                <ul className="select_list">
                  <li className="select_list_item">12 show</li>
                  <li className="select_list_item">14 show</li>
                  <li className="select_list_item">16 show</li>
                  <li className="select_list_item">18 show</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row_contain row">{items}</div>
        <ToastContainer />
      </div>
    );
  }
};

export default Men;
