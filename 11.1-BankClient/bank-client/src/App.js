import './App.css';
import React, { useState } from 'react';
import Button from './Components/Button';
import CreateUser from './Components/CreateUser';
import UsersList from './Components/UsersList';
import SearchUser from './Components/SearchUser/SearchUser';
import api from './API/bank-api';

function App() {

  const [addUserMode, setAddUserMode] = useState(false);
  const [errMsg, setErrMsg] = useState(null);

  const addUser = () => {
    console.log("addUser clicked ");
    setAddUserMode(!addUserMode);
  }

  const onAddUser = () => {
    console.log("add user");
  }

  const onCancel = () => {
    console.log("cancle");
    setAddUserMode(!addUserMode);
  }

  const onSearchUser = async (id) => {
    try {
      setErrMsg(null);
      const result = await api.get(`/${id}`);
      console.log(result.data)
    }
    catch (err) {
      console.log(err.response.data)
      setErrMsg(err.response.data.error);
    }
  }
  return (
    <div>
      {addUserMode ? <div className="App"> <CreateUser onAdd={onAddUser} onCancel={onCancel} />  </div> :
        <div className="App">
          <SearchUser onSearch={onSearchUser} />
          <div>{errMsg}</div>
          <Button className="addUserBtn" action="Add User" onClick={addUser} />
          <UsersList />
        </div>}
    </div>

  );
}

export default App;
