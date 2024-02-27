import { GlobalStyles } from './styles/global-styles';
import MainContainer from './components/main-container/MainContainer';
import UsersContainer from './components/users-container/UsersContainer';
import FiltersContainer, {
	filterByActive
} from './components/filters-container/FiltersContainer';
import { USERS } from './constants/users';
import { useState } from 'react';

const App = () => {
	// SEARCH
	// ACTIVE
	const [onlyActive, setOnlyActive] = useState(false);
	// SORTED
	const [sortBy, setSortBy] = useState(0);

	// Almacenamos lo que devuelve filterByActive (además de ejecutar la función), para que cuando se vuelva a pintar el componente App (cuando hacemos clic en el checkbox), ya esté actualizado el estado isActive al nuevo valor y se pueda ejecutar en el momento correcto la función filterByActive.
	const filteredUsers = filterByActive(USERS, onlyActive);

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
				/>
				<UsersContainer users={filteredUsers} />
			</MainContainer>
		</>
	);
};

export default App;
