import React, { Component } from 'react';

import UserStore from '../../stores/UserStore';
import ListViewItem from '../ListViewItem/ListViewItem';

class ListView extends Component {

  constructor () {
    super();

    this.state = {
      users: UserStore.getUsers()
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount () {
    UserStore.addChangeListener(this.onChange);
  }

  onChange () {
    this.setState({
      users: UserStore.getUsers()
    });
  }

  render () {
    const userListItems = this.state.users.map(user => {
      return (
        <ListViewItem user={user} key={user.id} />
      )
    });
    return (
      <div>
        <h3>Users</h3>
        <ul className="list-group">
          {userListItems}
        </ul>
      </div>
    );
  }
}

export default ListView;
