import React from "react";
import { Redirect, Route } from "react-router-dom";
import { routes } from "../../../../routes/Routes";

export const PrivateRoute = (props) => {
  const {
    userType,
    permittedUserTypes,
    path,
    exact,
    Component,
    isAuthenticated,
  } = props;

  if (!isAuthenticated || !permittedUserTypes.includes(userType)) {
    return <Redirect to={routes.loginUrl} />;
  }

  return <Route path={path} exact={exact} component={Component} />;
};

export default PrivateRoute;
