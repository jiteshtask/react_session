import React from "react";
import { createBrowserHistory } from 'history';
import {Router, Route, Switch } from "react-router-dom";
import LifeCycle from './LifeCycle';
import GetSnapshotBeforeUpdateMethod from './getSnapshotBeforeUpdate';
import ErrorHandling from './errorHandling';
export const history = createBrowserHistory({}); // to use history object use Router not BrowserRouter as Router as BrowserRouter ignores history props
 
const MyRoutes = () => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={LifeCycle} />
          <Route  path="/p1" component={GetSnapshotBeforeUpdateMethod} />
          <Route  path="/p2" component={ErrorHandling} />
        </Switch>
      </Router>
    </div>
  );
};



export default MyRoutes;