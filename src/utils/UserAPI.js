import UserActions from '../actions/UserActions';

const UserAPI = {
  getUserData: () => {
    const userData = JSON.parse(localStorage.getItem('users'));
    UserActions.getUsers(userData);
  },

  saveUserData: (data) => {
    localStorage.setItem('users', JSON.stringify(data));
  }
};

export default UserAPI;
