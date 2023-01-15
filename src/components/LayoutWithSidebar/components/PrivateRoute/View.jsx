import React from "react";
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = (props) => {
  const {
    userType,
    isAuthenticationChecked,
    permittedUserTypes,
    path,
    exact,
    Component,
    isAuthenticated,
  } = props;
  console.log("sdsd", path, exact, isAuthenticated);
  // if (!isAuthenticationChecked) {
  //   return null;
  // }

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return <Route path={path} exact={exact} component={Component} />;
};

export default PrivateRoute;
