import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCart = createAsyncThunk("cart/getCart", async () => {
  const response = await axios.get("http://localhost:3000/cart");
  console.log(response.data, "get cart");
  return response.data;
});
// export const addCart = createAsyncThunk("cart/addCart", async (cart) => {
//   console.log(cart, "post cart");
//   const response = await axios.post("http://localhost:3000/cart", cart);
//   return response.data;
// });
// export const editCart = createAsyncThunk("cart/editCart", async (obj) => {
//   console.log(obj);
//   let newarray = {
//     userId: obj.userId,
//     date: obj.date,
//     product: {
//       productId: obj.product.productId,
//       amount: obj.product.amount + 1,
//     },
//   };
//   const response = await axios.put(
//     `http://localhost:3000/cart/${obj.id}`,
//     newarray
//   );
//   return response.data;
// });
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
    getItemCart: (state, action) => {
      let isSame = false;
      const { productId } = action.payload.product;
      console.log(state.cart, "1");
      const test = state.cart.forEach((item) => {
        if (item.product.productId === productId) {
          isSame = true;
          item.amount += 1;
        }
      });
      console.log(test, "2");
      if (!isSame) {
        //add new item cart
        // addCart(action.payload);
      }
    },
  },
  extraReducers: {
    [getCart.fulfilled]: (state, action) => {
      state.cart = action.payload;
    },
    // [addCart.fulfilled]: (state, action) => {
    //   console.log("1", state.cart);
    //   state.cart = [...state.cart, action.payload];
    //   console.log("2", state.cart);
    // },
    // [editCart.fulfilled]: (state, action) => {
    //   state.cart = [...state.cart];
    //   state.cart.forEach((item) => {
    //     if (item.id === action.payload.id) {
    //       const { product } = action.payload;
    //       item.product.amount = product.amount;
    //     }
    //   });
    //   console.log(action.payload, state.cart, "edit ok");
    // },
  },
});
//create reducer
const cartReducer = cartSlice.reducer;
//seletor
export const cartSelector = (state) => state.cartReducer.cart;
export const cartquantitySelector = (state) => state.cartReducer.quantity;
export const carttotalSelector = (state) => state.cartReducer.totalCart;

//export action
export const { addCart, amount, increase, decrease, remove, total, getItemCart } =
  cartSlice.actions;

export default cartReducer;
