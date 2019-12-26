import React, { Component } from "react";

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

  increaseCounter = () => {
    let list = this.state.list;
    list.push("text");
    this.setState({
      counter: this.state.counter,
      list
    });
  };

  //componentDidCatch() only works for catching errors thrown by a components children
  componentDidCatch() {
    console.log("error happend");
  }

  shouldComponentUpdate(nextProp, nextState) {
    return true;
  }

  render() {
    return (
      <div>
        <button onClick={this.increaseCounter}> Try me out</button>
        <Conter list={this.state.list} />
      </div>
    );
  }
}

export default LifeCycle;
