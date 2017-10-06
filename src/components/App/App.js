import React, { Component } from 'react';
import './App.css';
import UserData from '../../utils/user-data';

UserData.init(); // initialize loading test data

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Manage Users</h1>
        </header>
      </div>
    );
  }
}

export default App;
