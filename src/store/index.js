import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productSlice";
import cartReducer from "./reducers/cartSlice";
import userReducer from "./reducers/userSlice";

//store

const store = configureStore({
  reducer: {
    productReducer,
    cartReducer,
    userReducer,
  },
});

//export store
export default store;
