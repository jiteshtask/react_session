import React, { Component  } from "react";
import PropTypes from 'prop-types';

class counter extends Component {
  
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

counter.propTypes = {
  list: PropTypes.array.isRequired
};


export default counter;
