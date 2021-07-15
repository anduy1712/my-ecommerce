import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import {
  getDetailProduct,
  productSelector,
} from "../store/reducers/productSlice";

const Detail = () => {
  //Reducer
  const dispatch = useDispatch();
  const product = useSelector(productSelector);
  //GetParam
  const { idUser } = useParams();

  //Get Product
  const { title, price, description, image } = product;

  //Effect
  useEffect(() => {
    dispatch(getDetailProduct(idUser));
  }, [dispatch, idUser]);
  return (
    <div className=" container-fluid">
      <div className="product row">
        <div className="product_item custom col-md-6">
          <div className="product_img">
            <div className="easyzoom">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Wristwatch by Ted Baker London",
                    isFluidWidth: true,
                    src: image,
                  },
                  largeImage: {
                    src: image,
                    width: 1200,
                    height: 1800,
                  },
                }}
              />
            </div>
          </div>
          <div className="product_note">
            <i classNameName="product_note-icon fas fa-search"></i>
            <p className="product_note-item">Zoom the image with the mouse</p>
          </div>
        </div>
        <div className="product_item col-md-6">
          <div className="product_profile">
            <h2 className="product_profile-heading">{title}</h2>
            <div className="product_profile-star">
              <i className="product_icon fas fa-star"></i>
              <i className="product_icon fas fa-star"></i>
              <i className="product_icon fas fa-star"></i>
              <i className="product_icon fas fa-star"></i>
              <i className="product_icon-inactive fas fa-star"></i>
              <p className="product_profile-review">1 review</p>
            </div>

            <p className="product_profile-stock">in stock</p>
            <p>SKU: DP1</p>
            <p className="product_profile-price">${price}</p>
            <p className="product_profile-infor">{description}</p>
            <div className="product_profile-color">
              <p style={{ fontSize: 1.2 + "rem", fontWeight: 500 }}>Color:</p>
              <img
                src="https://cdn.shopify.com/s/files/1/0264/5000/1980/products/12_671ef0a6-90f5-4dd3-8491-d8dd4dbeba49_1024x1024.jpg?v=1569991091"
                alt=""
              />
              <img
                src="https://cdn.shopify.com/s/files/1/0264/5000/1980/products/13_d7e06b9a-ee61-4787-a888-a4497db798a9_1024x1024.jpg?v=1569991091"
                alt=""
              />
            </div>
            <p style={{ fontSize: 1.2 + "rem", fontWeight: 500 }}>Material:</p>
            <div className="product_profile-material">
              <p className="material-item-active material-item">Leather</p>
              <p className="material-item">Strap</p>
            </div>
            <p
              className="product_profile-quantity"
              style={{ fontSize: 1.2 + "rem", fontWeight: 500 }}
            >
              Quantity:
            </p>
            <p
              style={{ fontSize: 1.2 + "rem", display: "inline-block" }}
              className="product_profile-subtotal"
            >
              Subtotal:{" "}
            </p>
            <p
              style={{
                fontWeight: 700,
                display: "inline-block",
                fontSize: 1.2 + "rem ",
                letterSpacing: 0.2 + "px",
              }}
            >
              $870.00
            </p>
            <button
              className="product_profile-btn"
              style={{ display: "block" }}
            >
              Add to cart
            </button>
            <button
              className="product_profile-btn-white"
              style={{ display: "block" }}
            >
              Buy it now
            </button>
            <div className="product_support">
              <div className="product_support-item">
                <i className="sp_item-icon fas fa-globe-americas"></i>
                <p className="sp_item-content">Free Shipping World Wide</p>
              </div>
              <div className="product_support-item">
                <i className="sp_item-icon fas fa-undo"></i>
                <p className="sp_item-content">Free in-store return</p>
              </div>
              <div className="product_support-item">
                <i className="sp_item-icon fas fa-shield-alt"></i>
                <p className="sp_item-content">Secure shopping guarantee</p>
              </div>
              <div className="product_support-item">
                <i className="sp_item-icon fas fa-globe-americas"></i>
                <p className="sp_item-content">24 month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
