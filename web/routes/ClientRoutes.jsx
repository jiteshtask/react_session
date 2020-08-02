import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Contact from '../component/contact/Contact';
import NotFound from '../component/common/NotFound';

//import { PublicRoute } from '../component/contact/AuthGuard';

export const history = createBrowserHistory({});

const MainRoutes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default MainRoutes;
