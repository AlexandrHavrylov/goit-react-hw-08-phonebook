import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./contacts/contactsApi";
import { filter } from "./contacts/contacts-reducer";
import { authApi } from "./auth/authApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    authApi.middleware,
    contactsApi.middleware,
  ],

  devTools: process.env.NODE_ENV === "development",
});
