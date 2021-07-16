import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import { cartSelector } from "../store/reducers/cartSlice";
import { carttotalSelector, total } from "../store/reducers/cartSlice";
const Cart = () => {
  //reducer
  const cart = useSelector(cartSelector);
  //Get user
  const user = JSON.parse(localStorage.getItem("user"));
  const item = cart.map((item) => {
    return (
      <CartItem
        key={item.id}
        id={item.id}
        name={item.title}
        amount={item.amount}
        img={item.image}
        price={item.price}
      />
    );
  });
  const dispatch = useDispatch();
  const totalSelector = useSelector(carttotalSelector);
  //Effect
  useEffect(() => {
    dispatch(total());
  }, [cart, dispatch]);
  return (
    <div style={{ padding: 20 + "px" }} className="row">
      <div className="col-md-9">
        <table
          style={{ backgroundColor: "white" }}
          className="table table-shopping"
        >
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Sum</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{item}</tbody>
        </table>
        <a className="btn__duyan" href="/">
          Continue to shopping
        </a>
      </div>
      <div className="col-md-3">
        <form style={{ backgroundColor: "white" }}>
          <div className="cart__total">
            <h3>Cart Total</h3>
            <div className="cart__total-total">
              <p>Subtotal:</p>
              <span> ${totalSelector}</span>
              <br />
            </div>
            <div className="cart_total-shopping">
              <p>Shipping:</p>
              <span>
                There are no shipping methods available. Please double check
                your address, or contact us if you need any help.
              </span>
            </div>
            <div className="cart_total-checkout">
              <input
                style={{ background: "#dadada" }}
                className="input__checkout"
                type="text"
                name="id_user"
                readOnly={true}
                defaultValue={user.id}
                placeholder="email"
              />
              <input
                className="input__checkout"
                type="text"
                name="address"
                defaultValue={user.address}
                placeholder="Please enter your address"
                required
              />
            </div>
            <div className="btn__group">
              <input className="btn__duyan" defaultValue="Register" disabled />
              <input type="submit" value="Checkout" className="btn__duyan" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cart;
