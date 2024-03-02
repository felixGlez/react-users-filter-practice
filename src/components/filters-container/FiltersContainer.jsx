import { StyledCheckbox, StyledFiltersContainer } from './styles';

const FiltersContainer = ({
	onlyActive,
	setOnlyActive,
	sortBy,
	setSortBy,
	search,
	setSearch
}) => {
	return (
		<StyledFiltersContainer>
			<input type='text' onChange={event => handleSearch(setSearch, event)} />
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
	if (onlyActive) return users.filter(user => user.active);
	return [...users];
};

const handleDropDown = (setSortBy, event) => {
	const selectedValue = event.target.value;

	setSortBy(Number(selectedValue));
};

export const sortUsersByName = (users, sortBy) => {
	if (sortBy === 1) return users.sort((a, b) => a.name.localeCompare(b.name));
	return [...users];
};

const handleSearch = (setSearch, event) => {
	const inputValue = event.target.value;

	setSearch(inputValue);
};

export const filterBySearch = (users, search) => {
	const searchTerm = search.toLowerCase();
	if (searchTerm)
		return users.filter(user => user.name.toLowerCase().includes(searchTerm));
	return [...users];
};

export default FiltersContainer;
