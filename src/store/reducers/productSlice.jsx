import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Reducer thunk
export const getProducts = createAsyncThunk(
  "product/productFetch",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    response.data = response.data.map((item) => {
      return { ...item, amount: 1 };
    });
    return response.data;
  }
);

export const getDetailProduct = createAsyncThunk(
  "product/productDetail",
  async (idUser) => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${idUser}`
    );
    return response.data;
  }
);

export const getAllCate = createAsyncThunk("product/getCate", async () => {
  const response = await axios.get(
    "https://fakestoreapi.com/products/categories"
  );
  return response.data;
});
// fetchProduct();
const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    product: [],
    categories: [],
  },
  reducers: {
    test: {
      reducer: (state, action) => {
        alert(action.payload);
      },
    },
  },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      console.log("Fetch loading");
    },
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload; //action.payload == response.data;
    },
    [getProducts.rejected]: (state, action) => {
      console.log("get error");
    },
    //Get Detail
    [getDetailProduct.fulfilled]: (state, action) => {
      state.product = action.payload;
    },
    //Get Categories
    [getAllCate.fulfilled]: (state, action) => {
      state.categories = action.payload;
    },
  },
});

//create reducer
const productReducer = productSlice.reducer;
//export,create seletor
//get products
export const productsSelector = (state) => state.productReducer.products;
//get product
export const productSelector = (state) => state.productReducer.product;
//get categories
export const cateSelector = (state) => state.productReducer.categories;
//export action
export const { test } = productSlice.actions;

//export reducer
export default productReducer;
