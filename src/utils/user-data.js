const UserData = {
  init: () => {
    localStorage.clear();
    localStorage.setItem('users', JSON.stringify([
      {
        name: {
          first: 'Jimmy',
          last: 'Dorsey'
        },
        address: '111 Green Dolphin St'
      }, {
        name: {
          first: 'Glenn',
          last: 'Miller'
        },
        address: '6500 Pennsylvania Ave'
      }, {
        name: {
          first: 'Hal',
          last: 'Kemp'
        },
        address: '404 Broken Dreams Blvd'
      }, {
        name: {
          first: 'Chick',
          last: 'Corea'
        },
        address: '123 Spain Ct'
      }
    ]));
  }
};

export default UserData;
