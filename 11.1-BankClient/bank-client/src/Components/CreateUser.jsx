import React, { useState } from 'react'
import Button from './Button'
import api from '../API/bank-api'

function CreateUser(props) {

  const [passpot, setPassport] = useState('');
  const onAddUser = async (event) => {
    event.preventDefault();
    if (passpot.length > 0) {
      console.log("add:", passpot);
      try {
        const result = await api.post(`/`, { "id": passpot });
        console.log(result.data);
      }
      catch (err) {
        console.log(err);
      }

    }
  }

  const inputHandler = (event) => {
    setPassport(event.currentTarget.value);
  }

  return (
    <form>
      <h2>Add New User</h2>
      <label>User Passport:</label>
      <input onChange={inputHandler} value={passpot}></input>
      <br />
      <Button action="Add User" onClick={onAddUser} type='submit' />
      <Button action="Done" onClick={props.onCancel} />
      <br />
    </form>
  )
}

export default CreateUser
