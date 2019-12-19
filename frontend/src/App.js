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

  return (
    <div className="App">
      <Form addUser={addUser} />
      <Users users={users} />
    </div>
  );
}

export default App;
