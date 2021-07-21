import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productSlice";
import cartReducer from "./reducers/cartSlice";
import userReducer from "./reducers/userSlice";
import customersReducer from "./reducers/customers";
//store

const store = configureStore({
  reducer: {
    productReducer,
    userReducer,
    customersReducer,
    cartReducer,
  },
});

//export store
export default store;
