import React, { Component } from 'react';

import UserActions from '../../actions/UserActions';

import './NewUser.css';

class NewUser extends Component {

  constructor () {
    super();

    this.state = {
      first: '',
      last: '',
      address: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange (event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit (event) {
    const { first, last, address } = this.state;
    const newUser = {
      name: { first, last },
      address
    };
    UserActions.addUser(newUser);
    this.setState({
      first: '',
      last: '',
      address: ''
    });
    event.preventDefault();
  }

  render () {
    return (
      <div className="new-user-form-panel">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              name="first"
              value={this.state.first}
              onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              name="last"
              value={this.state.last}
              onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              name="address"
              value={this.state.address}
              onChange={this.handleInputChange} />
          </div>
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
      </div>
    )
  }
}

export default NewUser;
