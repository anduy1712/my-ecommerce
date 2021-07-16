import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//GET USER
export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const response = await axios.get("http://localhost:3000/users");
  return response.data;
});
//ADD USER
export const addUser = createAsyncThunk("users/addUser", async (user) => {
  const { firstName, email, password } = user;
  const obj = {
    email,
    username: "johnd",
    password,
    author: 2,
    name: {
      firstname: firstName,
      lastname: "Doe",
    },
    address: "528 Dien Bien Phu street, distrist 10, HCM",
    phone: "1-570-236-7033",
  };
  console.log(obj);
  await axios.post("http://localhost:3000/users", obj);
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
    logout: {
      reducer: (state, action) => {
        state.auth = false;
        localStorage.removeItem("user");
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
      state.users = [...state.users, action.payload];
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
export const { login, logout } = userSlice.actions;
export default userReducer;
