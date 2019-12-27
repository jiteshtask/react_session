import React, { Component } from "react";

export default class ErrorHandling extends Component {
  state = {
    error: false,
    errorMessage: "",
    title: "title"
  };

  componentDidCatch(error) {
    console.log(error);
    this.setState({
      error: true
    });
  }

//   static getDerivedStateFromError(error) {
//     return {
//       error: true,
//       errorMessage: error
//     };
//   }

  render() {
    return (
      <div>{this.state.error ? <div>Some error</div> : <ChildComponent />}</div>
    );
  }
}

class ChildComponent extends Component {
  render() {
    return <h1>{this.state.title}</h1>;
  }
}
