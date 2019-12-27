import React, { Component } from "react";
import { Link } from "react-router-dom";

import Conter from "./Counter";

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "Test",
      counter: 0,
      list: []
    };
  }

  //The getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM.
  //This is the natural place to set the state object based on the initial props.
  static getDerivedStateFromProps(props, state) {
    return {list: props.list? props.list :state.list };
  }

  componentDidMount() {
    console.log("component mounted");
  }



  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevState.counter, "getSnapshotBeforeUpdate");
    return null;
  }
  
  componentDidUpdate() {
    console.log( this.state.counter, "componentDidUpdate");
  }

  increaseCounter = () => {
    let list = this.state.list;
    list.push("text");
    this.setState({
      counter: this.state.counter +1,
      list
    });
  };

//only works for catching errors thrown by a components children
  componentDidCatch() {
    console.log("error happend");
  }



  shouldComponentUpdate(nextProp, nextState) {
    return true;
  }

  componentWillUnmount(){
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <div>
        <button onClick={this.increaseCounter}> Try me out</button>
        <Link to="/p1"> Favorite Color </Link>
        <Conter list={this.state.list} />
      </div>
    );
  }
}

export default LifeCycle;
