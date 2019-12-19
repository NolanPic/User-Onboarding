import React from 'react';
import User from './User';

const Users = ({ users }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users.length ? users.map(user => 
                    <User key={user.id} name={user.name} email={user.email} />)
                : (
                    <tr>
                        <td colSpan="2">No users created</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default Users;