
import React from 'react';

class GetSnapshotBeforeUpdateMethod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 5000)
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevState.favoritecolor, "getSnapshotBeforeUpdate");
    return null;
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log( this.state.favoritecolor,snapshot, "componentDidUpdate");
  }
  
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <div id="div1"></div>
      <div id="div2"></div>
      </div>
    );
  }
}

export default GetSnapshotBeforeUpdateMethod;