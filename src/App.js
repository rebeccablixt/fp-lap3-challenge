import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import axios from 'axios';


// import getResult from './actions';
import './App.css';

function App() {
  // const dispatch = useDispatch();
  const [repos, setRepos] = useState([])
  const [username, setUsername] = useState('')
  
  
  const handleUsernameSubmit = e => {
    e.preventDefault()
    const getResult = async (username) => {
            try {
                const { data } = await axios.get(`https://api.github.com/users/${username}/repos`)
                console.log(data)
                setRepos(data)
            } catch (err) {
                throw new Error(err.message)
            }
    }
    getResult(username)
    // useEffect(() => {
    


      // setRepos(getResult(username))
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
    <h1>Github Repos</h1>
    <form onSubmit={handleUsernameSubmit}>
      <input type="text" name="username" onChange={updateInput}/>
      <input type="submit" />
    </form>
    <h2>{username ? `Results for ${username}` : ''}</h2>
    <div>
      {repos.map(repo => (
        <div key={repo.id} className="card">
          <a href={repo.html_url}>{repo.name}</a>
          <p>{repo.description}</p>
        </div>))}
    </div>
    </>
  );
}

export default App;
