import React, { Component } from "react";
import Conter from "./Counter";

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "Test",
      counter: 0,
      list: []
    };
  }
  componentWillMount() {
    console.log("now component will mount");
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

  componentDidCatch() {
    console.log("error happend");
  }

  shouldComponentUpdate(nextProp, nextState) {
    return true;
  }

  render() {
    return (
      <div>
        <Conter list={this.state.list} />

        <img src="assets/15.png" />

        <button onClick={this.increaseCounter}> Try me out</button>
      </div>
    );
  }
}

export default New;
