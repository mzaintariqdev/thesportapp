import React, { useEffect } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';

import Login from '../Login';
import LayoutWithSidebar from '../LayoutWithSidebar';
import { routes } from '../../routes/Routes';

const AppLayout = (props) => {
  const { userType, actions } = props;

  useEffect(() => {
    actions.checkIsUserAuthenticated();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="AppLayout">
      <Switch>
        <Route exact path={routes.loginUrl} component={Login} />
        <LayoutWithSidebar userType={userType} />
      </Switch>
    </div>
  );
};

export default withRouter(AppLayout);
