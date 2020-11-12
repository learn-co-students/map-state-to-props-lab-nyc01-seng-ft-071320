import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {

    let users = this.props.users.map(user => <li>{user.username}</li>)
    // debugger
    return (
      <div>
      {this.props.userCount} 
        <ul>
          Users!
          {users}
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) =>{
  return { users: state.users, userCount: state.users.length}
}

export default connect(mapStateToProps)(Users)
