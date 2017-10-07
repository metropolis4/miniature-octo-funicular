const UserData = {
  init: () => {
    localStorage.clear();
    localStorage.setItem('users', JSON.stringify([
      {
        name: {
          first: 'Jimmy',
          last: 'Dorsey'
        },
        address: '111 Green Dolphin St',
        id: null
      }, {
        name: {
          first: 'Glenn',
          last: 'Miller'
        },
        address: '6500 Pennsylvania Ave',
        id: null
      }, {
        name: {
          first: 'Hal',
          last: 'Kemp'
        },
        address: '404 Broken Dreams Blvd',
        id: null
      }, {
        name: {
          first: 'Chick',
          last: 'Corea'
        },
        address: '123 Spain Ct',
        id: null
      }
    ]));
  }
};

export default UserData;
