import { v4 } from 'uuid';
import FiltersContainer from './components/filters-container/FiltersContainer';
import MainContainer from './components/main-container/MainContainer';
import UserCard from './components/user-card/UserCard';
import { USERS } from './constants/users';
import { GlobalStyles } from './styles/global-styles';

const App = () => {
	<GlobalStyles />;
	return (
		<MainContainer>
			<h1>Listado de usuarios</h1>
			<FiltersContainer />
			{USERS.map(user => {
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
		</MainContainer>
	);
};

export default App;
