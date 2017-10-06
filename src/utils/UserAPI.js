import FluxUserActions from '../actions/FluxUserActions';

const UserAPI = {
  getUserData: () => {
    const userData = JSON.parse(localStorage.getItem('users'));
    FluxUserActions.receiveUsers(userData);
  }
};

export default UserAPI;
