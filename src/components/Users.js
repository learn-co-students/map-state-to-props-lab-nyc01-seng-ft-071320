import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {

  renderUsers = () => {
    return this.props.users.map(user => <li>{user.username}</li>)
  }

  render() {
    console.log(this.props.users)
    return (
      <div>
        {this.props.numberOfUsers}
        <ul>
          Users!
          {this.renderUsers()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    users: state.users,
    numberOfUsers: state.users.length 
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
