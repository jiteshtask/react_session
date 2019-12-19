import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const MyRoutes = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/p1" component={P1} />
          <Route exact path="/p2/" component={P2} />
          <Route exact path="/p3" component={P3} />
          <Route
            path="/p4"
            render={() => {
              return <p>In P4</p>;
            }}
          />
          <Route render={() => <p>YOU ARE LOST</p>} />
        </Switch>
      </Router>
    </div>
  );
};

const P2 = () => <p>In P 2</p>;

const P3 = () => <p>In P 3</p>;

const Home = ({ match }) => <p>You are home buddy</p>;

const P1 = ({ match }) => {
  return (
    <div>
      <p>In P 1</p>
      <Route exact path={`${match.url}/p2`} component={P2} />
      <Route exact path={`${match.url}/p3`} component={P3} />
    </div>
  );
};

export default MyRoutes;
