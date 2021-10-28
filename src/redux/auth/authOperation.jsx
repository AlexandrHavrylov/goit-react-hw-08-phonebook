import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";

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

    return data;
  } catch (error) {
    throw new Error();
  }
});

export const logInUser = createAsyncThunk("auth/logInUser", async (user) => {
  try {
    const { data } = await axios.post("/users/login", user);
    return data;
  } catch (error) {
    throw new Error();
  }
});

export const logOut = createAsyncThunk(
  "auth/logOutUser",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    try {
      token.set(state.auth.token);
      const { data } = await axios.post("/users/logout");

      return data;
    } catch (error) {
      throw new Error();
    }
  }
);
