import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Users from './components/Users';

function App() {

  const [users, setUsers] = useState([]);

  const addUser = user => {
    setUsers([...users, user]);
  }

  const checkIfEmailIsAvailable = email => {
    return users.filter(user => user.email === email).length === 0;
  };

  return (
    <div className="App">
      <Form
        addUser={addUser}
        checkIfEmailIsAvailable={checkIfEmailIsAvailable}
      />
      <Users users={users} />
    </div>
  );
}

export default App;
