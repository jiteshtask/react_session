import React from "react";

class AddingState extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
          message: 'Adding State to Component Example'
        }
      }

    render() {
      return (
      <h1>{this.state.message}</h1>
      )
    }
  }

export default AddingState;