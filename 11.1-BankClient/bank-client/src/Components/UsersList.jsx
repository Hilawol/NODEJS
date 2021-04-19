import React, { useEffect, useState } from 'react'
import axios from 'axios';
import User from './User';
import api from '../API/bank-api';

function UsersList() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const users = await api.get();
      setUsers(users.data);
      console.log(users)
    }
    getUsers();
  }, [])
  return (
    <div>
      <h1>USERS:</h1>
      {users.map(u => <User key={u.id} user={u} />)}
    </div>
  )
}

export default UsersList
