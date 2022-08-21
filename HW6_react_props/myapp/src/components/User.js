import React from 'react';
import ToDoList from './ToDoList';

export default function User({ id, firstname, lastname, avatar, tasks }) {
	const cards_style = {
		width: '250px',
		border: '1px solid black',
		margin: '15px',
		padding: '10px',
		backgroundColor: 'lightblue',
		fontSize: '20px',
	};

	const avatar_style = {
		width: '250px',
		height: '250px',
		objectFit: 'cover',
	};

	const avatar_url = avatar ?? '../../media/no_face.png';
	return (
		<div style={cards_style}>
			<img src={avatar_url} alt='avatar' style={avatar_style} />
			<p>Id:{id}</p>
			<p>Firstname:{firstname}</p>
			<p>Lastname:{lastname}</p>
			<ToDoList tasks={tasks} />
		</div>
	);
}
