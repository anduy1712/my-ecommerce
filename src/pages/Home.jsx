import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cateSelector, getAllCate } from "../store/reducers/productSlice";
const Home = () => {
  //Reducer
  const dispatch = useDispatch();
  const cate = useSelector(cateSelector);

  useEffect(() => {
    dispatch(getAllCate());
  }, [dispatch]);
  return (
    <div
      style={{ padding: 0, background: "white" }}
      className="container-fluid"
    >
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://cdn.shopify.com/s/files/1/0264/5000/1980/files/Slide2.jpg?v=1569932794"
              alt="First slide"
            />
            <div className="caption-slider d-none d-md-block">
              <h5 className="caption-heading">MILANCELOS</h5>
              <p className="caption-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium aut officia molestias adipisci, eius quaerat
                asperiores quos nulla.
              </p>
              <button className="caption-btn">Shop this collection</button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://cdn.shopify.com/s/files/1/0264/5000/1980/files/Slide3.jpg?v=1569933096"
              alt="Second slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>BLACKTRIES</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, dolorum?
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://cdn.shopify.com/s/files/1/0264/5000/1980/files/Slide1.jpg?v=1569931891"
              alt="Third slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>BLACKTRIES</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, dolorum?
              </p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="row-duyan row">
        <div className="col-md-4">
          <div className=" box_watch">
            <h2 className="animated fadeInUp wow box_watch-heading">
              SHOP THE COLLECTIONS
            </h2>
            <p className="animated fadeInUp wow box_watch-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              consequatur dolores libero nihil quidem veritatis. Harum ea
              deserunt totam, repellat nostrum ullam fugit reiciendis molestias
              quisquam neque reprehenderit.
            </p>
            <a href=".." className="animated fadeInUp wow box_watch-link">
              DISCOVER
            </a>
          </div>
        </div>
        <div className="col-md-8">
          <div className="row">
            {cate.forEach((item) => {})}
            <div className="col-md-3">
              <div className="boxpopular_watch">
                <img
                  src="https://cdn.shopify.com/s/files/1/0264/5000/1980/collections/image-collection-1-compressor_large.jpg?v=1569935516"
                  alt=""
                />
                <h3 className="boxpopular_watch-heading">BLACKZERI</h3>
                <p className="boxpopular_watch-content">8 product</p>
                {/* <button className="btn-popular">Shop now</button> */}
                <Link to="/products/Burberry" className="btn-popular">
                  Shop now
                </Link>
              </div>
            </div>
            <div className="col-md-3">
              <div className="boxpopular_watch">
                <img
                  src="https://cdn.shopify.com/s/files/1/0264/5000/1980/collections/image-collection-3-compressor_large.jpg?v=1569935478"
                  alt=""
                />
                <h3 className="boxpopular_watch-heading">COSMOPOLIS</h3>
                <p className="boxpopular_watch-content">8 product</p>
                <Link to="/products/Cosmopolis" className="btn-popular">
                  Shop now
                </Link>
              </div>
            </div>
            <div className="col-md-3">
              <div className="boxpopular_watch">
                <img
                  src="https://cdn.shopify.com/s/files/1/0264/5000/1980/collections/image-collection-2-compressor_large.jpg?v=1569935497"
                  alt=""
                />
                <h3 className="boxpopular_watch-heading">MILANCELOS</h3>
                <p className="boxpopular_watch-content">8 product</p>
                <Link to="/products/Milancelos" className="btn-popular">
                  Shop now
                </Link>
              </div>
            </div>
            <div className="col-md-3">
              <div className="boxpopular_watch">
                <a href="sanpham.html">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0264/5000/1980/collections/image-collection-1-compressor_large.jpg?v=1569935516"
                    alt=""
                  />
                  <h3 className="boxpopular_watch-heading">BLACKZERI</h3>
                  <p className="boxpopular_watch-content">8 product</p>
                  <button className="btn-popular">Shop now</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" row-img row">
        <div className="box6_2 animated fadeInUp wow delay-1 col-md-4 col-sm-6 col-xs-12">
          <div className="boximg boximg_content ">
            <h4 className="boximg_content-heading">MILANCELOS</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, at est. Cumque omnis rem Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Sunt, architecto? quia!
            </p>
            <a href="...">Learn More</a>
          </div>
        </div>
        <div className="box6_2 animated fadeInUp wow delay-2 col-md-4 col-sm-6 ">
          <div className="boximg">
            <img
              src="https://cdn.shopify.com/s/files/1/0264/5000/1980/files/2_1024x.jpg?v=1569996666"
              alt=""
            />
            <h3>New Release</h3>
          </div>
        </div>
        <div className="box6_2 animated fadeInUp wow delay-3 col-md-4 col-sm-6">
          <div className="boximg">
            <img
              src="https://cdn.shopify.com/s/files/1/0264/5000/1980/files/1_1024x.jpg?v=1569996689"
              alt=""
            />
            <h3>Best Seller</h3>
          </div>
        </div>
        <div className="box6_2 animated fadeInUp wow delay-1 col-md-4 col-sm-6">
          <div className=" boximg">
            <img
              src="https://cdn.shopify.com/s/files/1/0264/5000/1980/files/3_1024x.jpg?v=1569996580"
              alt=""
            />
            <h3>Gift Packes</h3>
          </div>
        </div>
        <div className="box6_2 animated fadeInUp wow delay-2 col-md-4 col-sm-6">
          <div className=" boximg">
            <img
              src="https://cdn.shopify.com/s/files/1/0264/5000/1980/files/4_1024x.jpg?v=1569996798"
              alt=""
            />
            <h3>Best Seller</h3>
          </div>
        </div>
        <div className="box6_2 animated fadeInUp wow delay-3 col-md-4 col-sm-6">
          <div className="boximg boximg_content ">
            <h3 className="boximg_content-heading">MILANCELOS</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, at est. Cumque omnis rem Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Sunt, architecto? quia!
            </p>
            <a href="...">Learn More</a>
          </div>
        </div>
      </div>
      <div className=" row-img row"></div>
      <div className="row">
        <div className="col-md-12">
          <h3 className="title_card">NEW RELEASES</h3>
        </div>
        <div className="col-md-3">
          <div className="card_home">
            <div className="card_men-images">
              <img
                className="card_home-img-item img-men"
                src="https://cdn.shopify.com/s/files/1/0264/5000/1980/products/02_300x.jpg?v=1569989512"
                alt=""
              />
              <p className="card_men-sold">Sold Out</p>
              <div className="card_men-listicon">
                <i className="card_men-icon1 far fa-heart"></i>
                <i className="card_men-icon2 far fa-eye"></i>
                <i className="card_men-icon3 fas fa-sync-alt"></i>
              </div>
              <p className="card_select">Select Options</p>
            </div>
            <div className="card_men-profile">
              <p className="card_men-product">Burberry</p>
              <h3 className="card_men-producttitle">
                Dulla Minterdum Diverra An Dacony Maliduet
              </h3>
              <div className="card_men-star product_profile-star">
                <i className="product_icon fas fa-star"></i>
                <i className="product_icon fas fa-star"></i>
                <i className="product_icon fas fa-star"></i>
                <i className="product_icon fas fa-star"></i>
                <i className="product_icon-inactive fas fa-star"></i>
              </div>
              <p className="card_men-price">$1.909</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card_home">
            <div className="card_men-images">
              <img
                className="card_home-img-item img-men"
                src="https://cdn.shopify.com/s/files/1/0264/5000/1980/products/02_300x.jpg?v=1569989512"
                alt=""
              />
              <p className="card_men-sold">Sold Out</p>
              <div className="card_men-listicon">
                <i className="card_men-icon1 far fa-heart"></i>
                <i className="card_men-icon2 far fa-eye"></i>
                <i className="card_men-icon3 fas fa-sync-alt"></i>
              </div>
              <p className="card_select">Select Options</p>
            </div>
            <div className="card_men-profile">
              <p className="card_men-product">Burberry</p>
              <h3 className="card_men-producttitle">
                Dulla Minterdum Diverra An Dacony Maliduet
              </h3>
              <div className="card_men-star product_profile-star">
                <i className="product_icon fas fa-star"></i>
                <i className="product_icon fas fa-star"></i>
                <i className="product_icon fas fa-star"></i>
                <i className="product_icon fas fa-star"></i>
                <i className="product_icon-inactive fas fa-star"></i>
              </div>
              <p className="card_men-price">$1.909</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card_home">
            <div className="card_men-images">
              <img
                className="card_home-img-item img-men"
                src="https://cdn.shopify.com/s/files/1/0264/5000/1980/products/02_300x.jpg?v=1569989512"
                alt=""
              />
              <p className="card_men-sold">Sold Out</p>
              <div className="card_men-listicon">
                <i className="card_men-icon1 far fa-heart"></i>
                <i className="card_men-icon2 far fa-eye"></i>
                <i className="card_men-icon3 fas fa-sync-alt"></i>
              </div>
              <p className="card_select">Select Options</p>
            </div>
            <div className="card_men-profile">
              <p className="card_men-product">Burberry</p>
              <h3 className="card_men-producttitle">
                Dulla Minterdum Diverra An Dacony Maliduet
              </h3>
              <div className="card_men-star product_profile-star">
                <i className="product_icon fas fa-star"></i>
                <i className="product_icon fas fa-star"></i>
                <i className="product_icon fas fa-star"></i>
                <i className="product_icon fas fa-star"></i>
                <i className="product_icon-inactive fas fa-star"></i>
              </div>
              <p className="card_men-price">$1.909</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card_home">
            <div className="card_men-images">
              <img
                className="card_home-img-item img-men"
                src="https://cdn.shopify.com/s/files/1/0264/5000/1980/products/02_300x.jpg?v=1569989512"
                alt=""
              />
              <p className="card_men-sold">Sold Out</p>
              <div className="card_men-listicon">
                <i className="card_men-icon1 far fa-heart"></i>
                <i className="card_men-icon2 far fa-eye"></i>
                <i className="card_men-icon3 fas fa-sync-alt"></i>
              </div>
              <p className="card_select">Select Options</p>
            </div>
            <div className="card_men-profile">
              <p className="card_men-product">Burberry</p>
              <h3 className="card_men-producttitle">
                Dulla Minterdum Diverra An Dacony Maliduet
              </h3>
              <div className="card_men-star product_profile-star">
                <i className="product_icon fas fa-star"></i>
                <i className="product_icon fas fa-star"></i>
                <i className="product_icon fas fa-star"></i>
                <i className="product_icon fas fa-star"></i>
                <i className="product_icon-inactive fas fa-star"></i>
              </div>
              <p className="card_men-price">$1.909</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
