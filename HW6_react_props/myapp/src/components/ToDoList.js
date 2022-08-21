import React from 'react';
import ToDoItem from './ToDoItem';

export default function ToDoList({ tasks }) {
	return (
		<div>
			Tasks:
			{tasks
				? tasks.map((task) => <ToDoItem key={task.id} {...task} />)
				: 'No tasks'}
		</div>
	);
}
