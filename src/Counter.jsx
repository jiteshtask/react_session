import React, { Component } from "react";

class counter extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(nextProps, this.props);
  }

  componentWillUpdate() {
    console.log("will update");
  }

  componentDidUpdate() {
    console.log("already updated");
  }



  render() {
    console.log("rendering counter component");
    return (
      <div>
        <p>{this.props.list.toString()}</p>
      </div>
    );
  }
}

export default counter;
