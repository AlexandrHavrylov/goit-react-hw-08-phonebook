import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
export default function PrivateRoute({ children, redirectTo, ...routeProps }) {
  const isLogedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Route {...routeProps}>
      {!isLogedIn ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
