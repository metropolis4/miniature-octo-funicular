import AppDispatcher from '../dispatcher/AppDispatcher';
import UserConstants   from '../constants/UserConstants';

const UserActions = {
  addUser: (userData) => {
    AppDispatcher.handleAction({
      actionType: UserConstants.add,
      data: userData
    });
  },

  deleteUser: (userData) => {
    AppDispatcher.handleAction({
      actionType: UserConstants.delete,
      data: userData
    });
  },

  updateUser: (userData) => {
    AppDispatcher.handleAction({
      actionType: UserConstants.update,
      data: userData
    });
  },

  getUsers: (userData) => {
    AppDispatcher.handleAction({
      actionType: UserConstants.get,
      data: userData
    });
  },

  selectUser: (userData) => {
    AppDispatcher.handleAction({
      actionType: UserConstants.select,
      data: userData
    });
  }
}

export default UserActions;
