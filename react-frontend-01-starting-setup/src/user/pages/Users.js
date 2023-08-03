import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS=[
        {
        id:'u1',
        name:'max',
       image:'https://www.gravatar.com/avatar/4798617496366fdde2c1c3b69d9293e9?s=250&d=mm&r=x',
      places:3
   }
];
   return <UsersList items={USERS}/>;
};
export default Users;
// this users page will render list of users by pass arrays of USERS(dumy since no backend present) as props named USERS which is array of users;
//ans this is taken by userslist