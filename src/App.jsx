import { useState } from 'react';
import FiltersContainer from './components/filters-container/FiltersContainer';
import MainContainer from './components/main-container/MainContainer';

import { GlobalStyles } from './styles/global-styles';
import { USERS } from './constants/users';
import UsersContainer from './components/users-container/UsersContainer';

const App = () => {
	const [isActive, setIsActive] = useState(false);
	const [users, setUsers] = useState(USERS);

	console.log(isActive);
	console.log(users);

	return (
		<>
			<GlobalStyles />
			<MainContainer>
				<h1>Listado de usuarios</h1>
				<FiltersContainer
					action={() => filterByActive(isActive, setIsActive, users, setUsers)}
				/>
				<UsersContainer users={users} />
			</MainContainer>
		</>
	);
};

const filterByActive = (isActive, setIsActive, users, setUsers) => {
	setIsActive(!isActive);

	const filteredByActive = users.filter(user => user.active);

	if (isActive) {
		setUsers(filteredByActive);
	}
};

export default App;
