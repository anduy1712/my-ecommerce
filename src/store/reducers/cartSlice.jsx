import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    quantity: 0,
    totalCart: 0,
  },
  reducers: {
    addCart: (state, action) => {
      if (state.cart.length !== 0) {
        console.log("Cart ton tai");
        const { id } = action.payload[0];
        let isSame = false;
        state.cart.forEach((item) => {
          if (item.id === id) {
            isSame = true;
            item.amount += 1;
          }
        });
        if (!isSame) {
          action.payload = action.payload.map((item) => {
            return { ...item, amount: 1 };
          });
          state.cart = [...state.cart, ...action.payload];
        }
      } else {
        action.payload = action.payload.map((item) => {
          return { ...item, amount: 1 };
        });
        state.cart = [...state.cart, ...action.payload];
      }
    },
    amount: (state, action) => {
      state.quantity = state.cart.reduce((sum, item) => {
        return (sum += item.amount);
      }, 0);
    },
    increase: (state, action) => {
      state.cart.forEach((item) => {
        if (item.id === action.payload) {
          item.amount += 1;
        }
      });
    },
    decrease: (state, action) => {
      state.cart.forEach((item) => {
        if (item.id === action.payload) {
          item.amount -= 1;
        }
      });
      state.cart = state.cart.filter((item) => {
        return item.amount !== 0;
      });
    },
    remove: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    total: (state, action) => {
      state.totalCart = state.cart.reduce((total, item) => {
        return (total += item.amount * item.price);
      }, 0);
    },
  },
});
//create reducer
const cartReducer = cartSlice.reducer;
//seletor
export const cartSelector = (state) => state.cartReducer.cart;
export const cartquantitySelector = (state) => state.cartReducer.quantity;
export const carttotalSelector = (state) => state.cartReducer.totalCart;

//export action
export const { addCart, amount, increase, decrease, remove, total } =
  cartSlice.actions;

export default cartReducer;
