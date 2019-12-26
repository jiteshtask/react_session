import React from "react";
import ChildComponent from './ChildComponent';
class PropsComponent extends React.Component {
    render() {
      return (
        <div>
          <h1>Parent Component</h1>
          <ChildComponent session="Child Component"/>
        </div>
      )
    }
  }

export default PropsComponent;