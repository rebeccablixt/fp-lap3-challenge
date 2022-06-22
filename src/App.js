import React, { useState } from 'react';

import axios from 'axios';
import moment from 'moment';

import './App.css';
import { Header } from './layout';

function App() {
	const [repos, setRepos] = useState([{ owner: { login: '' } }]);
	const [username, setUsername] = useState('');

	const handleUsernameSubmit = (e) => {
		e.preventDefault();
		const getResult = async (username) => {
			try {
				const { data } = await axios.get(
					`https://api.github.com/users/${username}/repos`
				);
				setRepos(data);
			} catch (err) {
				alert('user does not exist');
				throw new Error(err.message);
			}
		};
		getResult(username);
		setUsername('');
	};

	const updateInput = (e) => {
		e.preventDefault();
		const input = e.target.value;
		setUsername(input);
	};

	return (
		<main>
			<Header />
			<h1>Github Repos</h1>
			<form onSubmit={handleUsernameSubmit}>
				<label htmlFor='username'>username</label>
				<input
					id='username'
					type='text'
					name='username'
					onChange={updateInput}
					value={username}
				/>
				<input type='submit' />
			</form>
			<h2>
				{repos[0].owner.login ? `Results for ${repos[0].owner.login}` : ''}
			</h2>
			{repos[0].owner.login && (
				<ul>
					{repos.map((repo) => (
						<li key={repo.id} className='card'>
							<div className='first'>
								<a href={repo.html_url} className='card_title'>
									{repo.name}
								</a>
								<p>{repo.private ? 'Private' : 'Public'}</p>
							</div>

							<p>{repo.description}</p>

							<div className='last'>
								<p>{repo.language}</p>
								<a href={repo.stargazers_url} className='card_icon'>
									★{repo.stargazers_count}
								</a>
								<a href={repo.forks_url} className='card_icon'>
									<p>Forks:&nbsp;</p>
									{repo.forks_count}
								</a>
								<a href={repo.issues_url} className='card_icon'>
									<p>Issues:&nbsp;</p>
									{repo.open_issues_count}
								</a>
								<p>{moment(repo.updated_at).fromNow()}</p>
							</div>
						</li>
					))}
				</ul>
			)}
		</main>
	);
}

export default App;
