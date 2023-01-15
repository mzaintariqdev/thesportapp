import React, { useEffect } from "react";
import { Route, withRouter, Switch } from "react-router-dom";

import Login from "../Login";
import LayoutWithSidebar from "../LayoutWithSidebar";

const AppLayout = (props) => {
  const { userType, actions } = props;

  useEffect(() => {
    actions.checkIsUserAuthenticated();
  }, []);

  return (
    <div className="AppLayout">
      <Switch>
        <Route exact path="/login" component={Login} />
        <LayoutWithSidebar userType={userType} />
      </Switch>
    </div>
  );
};

export default withRouter(AppLayout);
