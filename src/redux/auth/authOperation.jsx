import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const regUser = createAsyncThunk("auth/regUser", async (user) => {
  try {
    const { data } = await axios.post("/users/signup", user);
    token.set(data.token);
    return data;
  } catch (error) {}
});

export const logInUser = createAsyncThunk("auth/logInUser", async (user) => {
  try {
    const { data } = await axios.post("/users/login", user);

    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const logOut = createAsyncThunk("auth/logOutUser", async (user) => {
  try {
    const { data } = await axios.post("/users/logout", user);
    token.set(data.token);
    return data;
  } catch (error) {}
});
