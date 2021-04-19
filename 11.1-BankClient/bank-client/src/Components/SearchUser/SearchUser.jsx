
import React, { useState } from 'react';
import './searchUser.css';
function SearchUser({ onSearch }) {

  const [term, setTerm] = useState('');

  const inputHandler = (event) => {
    setTerm(event.currentTarget.value);
  }

  return (
    <div className="searchComponent">
      <input type="text" placeholder="Search user" className="searchInput" onChange={inputHandler} value={term} />
      <button className="searchBtn" onClick={() => { if (term.length > 0) onSearch(term) }}>Search</button>
    </div >
  )
}

export default SearchUser
