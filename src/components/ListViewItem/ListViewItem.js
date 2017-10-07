import React, { Component } from 'react';

import UserActions from '../../actions/UserActions';
import './ListViewItem.css';


const ListViewItem = ({ user }) => {
  return (
    <li
      className={`list-group-item user-list-item ${user.selected ? 'selected': null}`}
      onClick={() => UserActions.selectUser(user)}>
      {user.name.first} {user.name.last}
    </li>
  )
}

export default ListViewItem;
