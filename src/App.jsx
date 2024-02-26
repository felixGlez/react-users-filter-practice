import { useState } from 'react';
import FiltersContainer from './components/filters-container/FiltersContainer';
import MainContainer from './components/main-container/MainContainer';
import { GlobalStyles } from './styles/global-styles';
import { USERS } from './constants/users';
import UsersContainer from './components/users-container/UsersContainer';

const App = () => {
	const [users, setUsers] = useState(USERS);

	console.log(users);

	return (
		<>
			<GlobalStyles />
			<MainContainer>
				<h1>Listado de usuarios</h1>
				<FiltersContainer setUsers={setUsers} />
				<UsersContainer users={users} />
			</MainContainer>
		</>
	);
};

export default App;
