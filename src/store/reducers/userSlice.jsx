import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//GET USER
export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const response = await axios.get("https://fakestoreapi.com/users");
  return response.data;
});
//ADD USER
export const addUser = createAsyncThunk("user/addUser", async (user) => {
  const { firstName, email, password } = user;
  const obj = {
    id: 21,
    email,
    username: "johnd",
    password,
    name: {
      firstname: firstName,
      lastname: "Doe",
    },
    address: {
      city: "kilcoole",
      street: "7835 new road",
      number: 3,
      zipcode: "12926-3874",
      geolocation: {
        lat: "-37.3159",
        long: "81.1496",
      },
    },
    phone: "1-570-236-7033",
  };
  console.log(obj);
  await axios.post("https://jsonplaceholder.typicode.com/todos", obj);
  return obj;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
  },
  reducers: [],
  extraReducers: {
    [fetchUser.pending]: (state, action) => {
      console.log("loading data");
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
    [fetchUser.rejected]: (state, action) => {
      console.log("error data");
    },
    //Get USer
    [addUser.pending]: (state, action) => {
      console.log("Posting data");
    },
    [addUser.fulfilled]: (state, action) => {
      state.user = [...state.user, action.payload];
      console.log(state.user, "test");
    },
    [addUser.rejected]: (state, action) => {
      console.log("error data");
    },
  },
});

//Reducer
const userReducer = userSlice.reducer;

//Selector
export const userSelector = (state) => state.userReducer.user;

export default userReducer;
