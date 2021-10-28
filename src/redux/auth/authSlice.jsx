import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { regUser, logInUser, logOut } from "./authOperation";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [regUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [regUser.rejected]() {
      toast.error(
        "Введены некоректные данные либо такой пользователь уже зарегистрирован"
      );
    },

    [logInUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logInUser.rejected]() {
      toast.error(
        "Введены некоректные данные либо такой пользователь не зарегистрирован"
      );
    },

    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export default auth.reducer;
