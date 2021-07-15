import React from "react";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { decrease, increase, remove } from "../store/reducers/cartSlice";
const CartItem = ({ id, name, img, price, amount }) => {
  const dispatch = useDispatch();
  const increaseCart = (id) => {
    dispatch(increase(id));
  };
  const decreaseCart = (id) => {
    dispatch(decrease(id));
  };
  const removeCart = (id) => {
    dispatch(remove(id));
  };
  const totalItem = price * amount;
  return (
    <tr>
      <td>{name}</td>
      <td>
        <img src={img} alt="" style={{ width: 60 + "px" }} />
      </td>
      <td>${price}</td>
      <td className="cart-amount">
        {amount}
        <div className="vetical-icon">
          <AiFillCaretUp
            onClick={() => increaseCart(id)}
            className="quantity-icon"
          ></AiFillCaretUp>
          <AiFillCaretDown
            onClick={() => decreaseCart(id)}
            className="quantity-icon"
          ></AiFillCaretDown>
        </div>
      </td>
      <td>Total: ${totalItem.toFixed()}</td>
      <td>
        <a href onClick={() => removeCart(id)} className="btn btn-danger">
          Remove
        </a>
      </td>
    </tr>
  );
};

export default CartItem;
