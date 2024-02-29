import { GlobalStyles } from './styles/global-styles';
import MainContainer from './components/main-container/MainContainer';
import UsersContainer from './components/users-container/UsersContainer';
import FiltersContainer, {
	filterByActive,
	sortUsersByName
} from './components/filters-container/FiltersContainer';
import { USERS } from './constants/users';
import { useState } from 'react';

const App = () => {
	// SEARCH
	const [search, setSearch] = useState('');
	// ACTIVE
	const [onlyActive, setOnlyActive] = useState(false);
	// SORTED
	const [sortBy, setSortBy] = useState(0);

	// Almacenamos lo que devuelve filterByActive (además de ejecutar la función), para que cuando se vuelva a pintar el componente App (cuando hacemos clic en el checkbox), ya esté actualizado el estado isActive al nuevo valor y se pueda ejecutar en el momento correcto la función filterByActive.
	let filteredUsers = filterByActive(USERS, onlyActive);
	filteredUsers = sortUsersByName(filteredUsers, sortBy);

	return (
		<>
			<GlobalStyles />
			<MainContainer>
				<h1>Listado de usuarios</h1>
				<FiltersContainer
					onlyActive={onlyActive}
					setOnlyActive={setOnlyActive}
					sortBy={sortBy}
					setSortBy={setSortBy}
					search={search}
					setSearch={setSearch}
				/>
				<UsersContainer users={filteredUsers} />
			</MainContainer>
		</>
	);
};

export default App;
