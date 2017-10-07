import { EventEmitter } from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';
import UserConstants from '../constants/UserConstants';
import IdFactory     from '../utils/id-factory';
import UserAPI       from '../utils/UserAPI';

class Users extends EventEmitter {
  constructor () {
    super();
    this._users = [];
    this._selected = null;
  }

  getUser () {
    return this._selected;
  }

  setUser (selectedUser) {
    this._users.forEach(user => user.selected = false);
    if (selectedUser) selectedUser.selected = true;
    this._selected = selectedUser;
  }

  getUsers () {
    return this._users;
  }

  setUsers (usersData) {
    usersData.forEach(user => {
      user.id = IdFactory.next().value;
      user.selected = false;
    });
    this._users = usersData;
  }

  addUser (user) {
    user.id = IdFactory.next().value;
    this._users.push(user);
    this.storeUpdates();
  }

  deleteUser ({ id }) {
    const userIndex = this._users.findIndex(user => user.id === id);
    this._users.splice(userIndex, 1);
    this.setUser(null);
    this.storeUpdates();
  }

  updateUser (user) {
    const userIndex = this._users.findIndex(u => u.id === user.id);
    this._users[userIndex] = user;
    this.storeUpdates();
  }

  emitChange () {
    this.emit('change');
  }

  storeUpdates () {
    UserAPI.saveUserData(this.getUsers());
  }

  addChangeListener (callback) {
    this.on('change', callback);
  }

  removeChangeListener (callback) {
    this.removeChangeListener('change', callback);
  }
}

const UserStore = new Users();

AppDispatcher.register(({ action: { actionType, data }}) => {

  switch(actionType) {
    case UserConstants.get:
      UserStore.setUsers(data);
      break;

    case UserConstants.add:
      UserStore.addUser(data);
      break;

    case UserConstants.delete:
      UserStore.deleteUser(data);
      break;

    case UserConstants.update:
      UserStore.updateUser(data);
      break;

    case UserConstants.select:
      UserStore.setUser(data);
      break;
  }

  UserStore.emitChange();

  return true;
});

export default UserStore;
