import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "Auth",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://connections-api.herokuapp.com/",
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: () => "/users/current",
      providesTags: ["User"],
    }),
    registerUser: builder.mutation({
      query: ({ name, email, password }) => ({
        url: "/users/signup",
        method: "POST",
        body: {
          name,
          email,
          password,
        },
      }),
      invalidatesTags: ["User"],
    }),
    loginUser: builder.mutation({
      query: ({ email, password }) => ({
        url: "/users/login",
        method: "POST",
        body: {
          email,
          password,
        },
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = authApi;
