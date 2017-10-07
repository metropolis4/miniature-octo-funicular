import React from 'react';

import './App.css';
import UserData from '../../utils/user-data';
import UserAPI  from '../../utils/UserAPI';
import UserStore from '../../stores/UserStore';

// Components
import UserDetail from '../UserDetail/UserDetail';
import NewUser from '../NewUser/NewUser';
import ListView from '../ListView/ListView';

/**
 * Check for localStorage data, and load test data if it doesn't exist
 */
UserAPI.getUserData();
const users = UserStore.getUsers();
if (!users.length) {
  UserData.init(); // initialize loading test data
  UserAPI.getUserData(); // mock API call to get test data to flux store
}

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Manage Users</h1>
      </header>
      <div className="App-content">
        <div>
          <h3>New User</h3>
          <NewUser />
        </div>
        <ListView />
        <UserDetail />
      </div>
    </div>
  );
};

export default App;
