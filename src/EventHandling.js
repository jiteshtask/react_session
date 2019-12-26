import React from "react";

class EventHandling extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
          message: 'Event handling example'
        }
      }

      handleChange = e => {
        this.setState({
            message: e.target.value
        })
      }

      render() {
        return (
          <div>
            Message :  {this.state.message} <br />
            Change Message:
            <input
              type="text"
              value={this.state.message}
              onChange={this.handleChange}
            />
          </div>
        )
      }
  }

export default EventHandling;