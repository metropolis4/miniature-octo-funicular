import React, { Component } from 'react';

import UserActions from '../../actions/UserActions';

class UserEdit extends Component {
  constructor (props) {
    super(props);

    this.state = {
      user: this.props.user
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit (event) {
    UserActions.updateUser(this.state.user);
    event.preventDefault();
  }

  handleInputChange (event) {
    const { name, value } = event.target;
    let user = Object.assign({}, this.state.user);
    switch(name) {
      case 'firstName':
        user.name.first = value;
        break;
      case 'lastName':
        user.name.last = value;
        break;
      case 'address':
        user.address = value;
        break;
    }
    this.setState({ user });
  }

  render () {
    const user = this.state.user;
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Edit User</h4>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            value={user.name.first}
            onChange={this.handleInputChange} />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={user.name.last}
            onChange={this.handleInputChange} />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={user.address}
            onChange={this.handleInputChange} />
        </div>
        <button type="submit" className="btn btn-primary pull-right">Save</button>
      </form>
    );
  }
}

export default UserEdit;
