import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {
  showUsers = () => {
    return this.props.users.map(user => <p>{user.username}</p>)
  }

  render() {
    console.log('rendering')
    return (
      <div>
          Users!
          {this.props.users.length > 0 ?
          <ul> 
            <li>
              {this.showUsers()}
            </li>
            <li>
              {this.props.userCount}
            </li>
          </ul>
          :
          null
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {users: state.users, userCount: state.users.length}
}


export default connect(mapStateToProps)(Users)
