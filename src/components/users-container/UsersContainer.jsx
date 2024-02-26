import { v4 } from 'uuid';
import UserCard from '../user-card/UserCard';

const UsersContainer = ({ users }) => {
	console.log(users);
	return (
		<>
			{users.map(user => {
				return (
					<UserCard
						key={v4()}
						avatar={user.profileImage}
						name={user.name}
						username={user.username}
						status={user.active}
					/>
				);
			})}
		</>
	);
};
export default UsersContainer;
