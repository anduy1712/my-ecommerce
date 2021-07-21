import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addCustomer = createAsyncThunk(
  "customers/addCustomer",
  async (customer) => {
    const response = await axios.post(
      "http://localhost:3000/customers",
      customer
    );
    return response.data;
  }
);

export const customersSlice = createSlice({
  name: "customers",
  initialState: {
    customers: [],
  },
  reducers: {},
  extraReducers: {
    [addCustomer.fulfilled]: (state, action) => {
      state.customers = action.payload;
    },
  },
});

//reducer
const customersReducer = customersSlice.reducer;

//export selector
export const customersSelector = (state) => state.customersReducer.customers;

//export action
export const {} = customersSlice.actions;

export default customersReducer;
