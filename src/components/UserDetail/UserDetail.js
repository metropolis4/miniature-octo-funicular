import React, { Component } from 'react';

import UserStore from '../../stores/UserStore';
import UserActions from '../../actions/UserActions';
import UserEdit from '../UserEdit/UserEdit';
import './UserDetail.css';

class UserDetail extends Component {
  constructor () {
    super();

    this.state = {
      selectedUser: UserStore.getUser(),
      editView: false
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount () {
    UserStore.addChangeListener(this.onChange);
  }

  componentDidUpdate (prevProps, { selectedUser }) {
    const currentSelectedUser = this.state.selectedUser;
    if (selectedUser && currentSelectedUser) {
      if (selectedUser !== currentSelectedUser) {
        this.setState({
          editView: false
        });
      }
    }
  }

  onChange () {
    this.setState({
      selectedUser: UserStore.getUser()
    });
  }

  toggleEdit () {
    const editView = !this.state.editView;
    this.setState({ editView })
  }

  deleteUser () {
    UserActions.deleteUser(this.state.selectedUser);
    this.setState({
      selectedUser: UserStore.getUser(),
      editView: false
    });
  }

  render () {
    const user = this.state.selectedUser;

    if (!user) {
      return (<div></div>);
    }

    const viewContent = (
      <div>
        <h4 className="card-title">{user.name.first} {user.name.last}</h4>
        <p className="card-text">
          Address: <br/>
          {user.address}
        </p>
        <div className="pull-right user-actions">
          <button
            className="btn btn-primary"
            onClick={() => this.toggleEdit()}>
            Edit</button>
          <button
            className="btn btn-danger"
            onClick={() => this.deleteUser()}>
            Delete</button>
        </div>
      </div>
    );

    return (
      <div>
        <h3>User Detail</h3>
        <div className="card user-card">
          <div className="card-body">
            {this.state.editView ? <UserEdit user={user} /> : viewContent}
          </div>
        </div>
      </div>
    );
  }
}

export default UserDetail;
