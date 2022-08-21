import User from './User';
import { users } from './data/users';

function App() {
	const styles = {
		display: 'flex',
	};
	const active_users = users.filter((user) => user.active);
	return (
		<div style={styles}>
			{active_users.map((user) => (
				<User key={user.id} {...user} />
			))}
		</div>
	);
}

export default App;
