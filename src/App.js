import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import axios from 'axios';
import moment from 'moment';


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
          <a href={repo.html_url} className="card_title">{repo.name}</a>
          <p>{repo.private ? 'Private': 'Public'}</p>
          <p>{repo.description}</p>
          <p>{repo.language}</p>
          <a href={repo.stargazers_url} className="card_icon">{repo.stargazers_count}</a>
          <a href={repo.forks_url} className="card_icon">{repo.forks_count}</a>
          <a href={repo.issues_url} className="card_icon">{repo.open_issues_count}</a>
          <p>{moment(repo.updated_at).fromNow()}</p>
        </div>))}
    </div>
    </>
  );
}

export default App;
