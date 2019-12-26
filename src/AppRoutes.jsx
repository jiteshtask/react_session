import React from "react";
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export const history = createBrowserHistory({}); // to use history object use Router not BrowserRouter as Router as BrowserRouter ignores history props
 
const MyRoutes = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/p1" component={P1} />
          <Route exact path="/p2" component={P2} />
          <Route exact path="/p3" component={P3} />
          <Route
            exact path="/p4"
            render={() => {
              return <p>In P4</p>;
            }}
          />
          <Route
            path="/p5/:dynamic"
            render={() => {
            return <P5 message="p5 Dynamic"/>
            }}
            
          />
          <Route render={() => <p>YOU ARE LOST</p>} />
        </Switch>
      </Router>
    </div>
  );
};

const Home = ({ match }) => <div><p>You are home buddy</p></div>;

//<p onClick={()=> history.push('/p4')}> p4 </p>

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

const P3 = () => <div><p>In P 3</p></div>;

//<li><Link to="/">home</Link></li>
//<li><a href="/">Home!</a></li>


const P5 = props => <p>{props.message}</p>


export default MyRoutes;
