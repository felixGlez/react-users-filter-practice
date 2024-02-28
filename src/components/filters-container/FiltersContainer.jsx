import { StyledCheckbox, StyledFiltersContainer } from './styles';

const FiltersContainer = ({ onlyActive, setOnlyActive, sortBy, setSortBy }) => {
	return (
		<StyledFiltersContainer>
			<input type='text' />
			<StyledCheckbox>
				<p>Sólo activos</p>
				<input
					type='checkbox'
					onChange={() => handleChecked(onlyActive, setOnlyActive)}
				/>
			</StyledCheckbox>
			<select onChange={event => handleDropDown(setSortBy, event)}>
				<option value='0'>Por defecto</option>
				<option value='1'>Por nombre</option>
			</select>
		</StyledFiltersContainer>
	);
};

const handleChecked = (onlyActive, setOnlyActive) => {
	setOnlyActive(!onlyActive);
};

export const filterByActive = (users, onlyActive) => {
	// Los arrays originales nunca se tocan, por eso se hace una copia del array original
	if (onlyActive) return [...users].filter(user => user.active);
	return [...users];
};

const handleDropDown = (setSortBy, event) => {
	const selectedValue = event.target.value;

	setSortBy(Number(selectedValue));
};

export const sortUsersByName = (users, sortBy) => {
	const sortedUsers = [...users];
	if (sortBy === 1)
		return sortedUsers.sort((a, b) => a.name.localeCompare(b.name));
	else if (sortBy === 0) return sortedUsers;
};

export default FiltersContainer;
