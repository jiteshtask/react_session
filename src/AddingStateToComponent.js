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
      <div>{this.state.message}</div>
      )
    }
  }

export default AddingState;