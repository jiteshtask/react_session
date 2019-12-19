import React from "react";
import {createBrowserHistory} from "history";

import {  Router, Route, Switch } from "react-router-dom";

const history= createBrowserHistory();

const AppRoutes = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/p1" component={P1} />
          <Route path="/p3" component={P3} />
          <Route render={() => <p>YOU ARE LOST</p>} />
        </Switch>
      </div>
    </Router>
  );
};

const Home = () => <p>You are home buddy</p>;

const P1 = ({ match }) => {
  return (
    <div>
      <p>In P 1</p>
      <Route exact path={`${match.url}/p2`} component={P2} />
      <Route exact path={`${match.url}/p3`} component={P3} />
    </div>
  );
};

const P2 = () => <p>In P 2</p>;

const P3 = () => <p>In P 3</p>;

export default AppRoutes;
