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
  } catch (error) {}
});

export const logOut = createAsyncThunk("auth/logOutUser", async (user) => {
  try {
    const { data } = await axios.post("/users/logout", user);
    token.set(data.token);
    return data;
  } catch (error) {}
});

// export const authApi = createApi({
//   reducerPath: "Auth",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://connections-api.herokuapp.com/",
//   }),
//   tagTypes: ["User"],
//   endpoints: (builder) => ({
//     getUserInfo: builder.query({
//       query: () => "/users/current",
//       providesTags: ["User"],
//     }),
//     registerUser: builder.mutation({
//       query: ({ name, email, password }) => ({
//         url: "/users/signup",
//         method: "POST",
//         body: {
//           name,
//           email,
//           password,
//         },
//       }),
//       invalidatesTags: ["User"],
//     }),
//     loginUser: builder.mutation({
//       query: ({ email, password }) => ({
//         url: "/users/login",
//         method: "POST",
//         body: {
//           email,
//           password,
//         },
//       }),
//       invalidatesTags: ["User"],
//     }),
//   }),
// });

// export const { useRegisterUserMutation, useLoginUserMutation } = authApi;
