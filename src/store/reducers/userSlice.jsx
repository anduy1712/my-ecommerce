import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Redirect } from "react-router-dom";

//GET USER
export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const response = await axios.get("http://localhost:3000/users");
  return response.data;
});
//ADD USER
export const addUser = createAsyncThunk("users/addUser", async (user) => {
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
    users: [],
    auth: false,
  },
  reducers: {
    login: {
      reducer: (state, action) => {
        // console.log(typeof action.payload.email, "reducer");
        let { email, password } = action.payload;
        state.users.forEach((user) => {
          if (user.email === email && user.password === password) {
            localStorage.setItem("user", JSON.stringify(user));
            state.auth = true;
            console.log("ok login");
          }
        });
      },
    },
  },
  extraReducers: {
    [fetchUser.pending]: (state, action) => {
      console.log("loading data");
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
    [fetchUser.rejected]: (state, action) => {
      console.log("error data");
    },
    //Get USer
    [addUser.pending]: (state, action) => {
      console.log("Posting data");
    },
    [addUser.fulfilled]: (state, action) => {
      state.users = [...state.user, action.payload];
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
export const userSelector = (state) => state.userReducer.users;
export const authSelector = (state) => state.userReducer.auth;

//export action
export const { login } = userSlice.actions;
export default userReducer;
