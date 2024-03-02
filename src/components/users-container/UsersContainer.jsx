import { v4 } from 'uuid';
import UserCard from '../user-card/UserCard';

const UsersContainer = ({ users }) => {
	console.log(users);
	return (
		<>
			{users.length === 0 ? (
				<h3>No hay usuarios que coincidan</h3>
			) : (
				users.map(user => {
					return (
						<UserCard
							key={v4()}
							avatar={user.profileImage}
							name={user.name}
							username={user.username}
							status={user.active}
						/>
					);
				})
			)}
		</>
	);
};
export default UsersContainer;
