import React from 'react';
import User from './User';

const Users = ({ users }) => {
    return users.map(user => <User name={user.name} email={user.email} />);
}

export default Users;