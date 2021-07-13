import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="navbar-footer row">
        <div className="col-md-3 ">
          <div className="navbar-footer-item">
            <i className="navbar_footer-icon far fa-paper-plane"></i>
            <p>Free shipping worldwide</p>
          </div>
        </div>
        <div className="col-md-3 d-none d-md-block">
          <div className="navbar_footer-icon navbar-footer-item">
            <i className="navbar_footer-icon fas fa-redo"></i>
            <p>Free in-store return</p>
          </div>
        </div>
        <div className="col-md-3 d-none d-md-block">
          <div className="navbar-footer-item">
            <i className="navbar_footer-icon fab fa-airbnb"></i>
            <p>Genuine product guarantee</p>
          </div>
        </div>
        <div className="col-md-3 d-none d-md-block">
          <div className="navbar-footer-item">
            <i className="navbar_footer-icon fas fa-chalkboard"></i>
            <p>Secure shopping guarantee</p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div className="box_footer">
              <h3 className="footer-heading">CUSTOMER SERVICE</h3>
              <p className="footer-content">
                685 Market Street, San Francisco, CA 94105, United States
              </p>
              <p>+0123 456 7890</p>
              <p>support@halothemes.com</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box_footer">
              <h3 className="footer-heading">SHOP</h3>
              <p className="footer-content">New In</p>
              <p>Mens</p>
              <p>sWomens</p>
              <p>Jewelry</p>
              <p>Accessories</p>
              <p>Brands</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box_footer">
              <h3 className="footer-heading">INFORMATION</h3>
              <p>Search Terms</p>
              <p>Advanced Search</p>
              <p>Orders and Returns</p>
              <p>Contact Us</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
