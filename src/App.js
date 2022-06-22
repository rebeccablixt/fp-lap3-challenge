import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';


import getResult from './actions';
import './App.css';

function App() {
  // const dispatch = useDispatch();
  const [repos, setRepos] = useState({})
  const [username, setUsername] = useState('')

  
  
  const handleUsernameSubmit = e => {
    e.preventDefault()
    // useEffect(() => {
      setRepos(getResult(username))
      console.log(repos)
      // console.log(getResult(username))
  // }, [])
  }
  
  const updateInput = e => {
    e.preventDefault()
    const input = e.target.value
    setUsername(input)
  }

  return (
    <>
    <form onSubmit={handleUsernameSubmit}>
      <input type="text" name="username" onChange={updateInput}/>
      <input type="submit" />
    </form>
    <h2>{username}</h2>
    <p>{repos.login}</p>
    </>
  );
}

export default App;
