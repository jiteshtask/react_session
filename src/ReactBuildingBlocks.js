import React from 'react';


class FriendsContainer extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        name: 'Jitesh',
        friends: [
          'Friend1',
          'Sarah Drasner',
          'Merrick Christensen'
        ],
      }
  
    }
    addFriend = friend => {
      this.setState((state) => ({
        friends: state.friends.concat([friend])
      }))
    }
    render() {
      return (
        <div>
          <h3> Name: {this.state.name} </h3>
          <AddFriend addNew={this.addFriend} />
          <ShowList names={this.state.friends} />
        </div>
      )
    }
  }

export default FriendsContainer;

class AddFriend extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      newFriend: ''
    }

  }
  updateNewFriend = e => {
    this.setState({
      newFriend: e.target.value
    })
  }
  handleAddNew= () => {
    this.props.addNew(this.state.newFriend)
    this.setState({
      newFriend: ''
    })
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.newFriend}
          onChange={this.updateNewFriend}
        />
        <button onClick={this.handleAddNew}> Add Friend </button>
      </div>
    )
  }
}

class ShowList extends React.Component {
  render() {
    return (
      <div>
        <h3> Friends </h3>
        <ul>
          {this.props.names.map((friend) => {
            return <li> {friend} </li>
          })}
        </ul>
      </div>
    )
  }
}
