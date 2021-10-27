import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
export default function PublicRoute({
  children,
  redirectTo,
  restricted = false,
  ...routeProps
}) {
  const isLogedIn = useSelector((state) => state.auth.isLoggedIn);
  const shoudRedirect = isLogedIn && restricted;
  console.log(shoudRedirect);

  return (
    <Route {...routeProps}>
      {shoudRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
