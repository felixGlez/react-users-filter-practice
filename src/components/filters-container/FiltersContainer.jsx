import { useState } from 'react';
import { USERS } from '../../constants/users';
import { StyledCheckbox, StyledFiltersContainer } from './styles';

const FiltersContainer = ({ setUsers }) => {
	const [isActive, setIsActive] = useState(false);
	console.log(isActive);

	return (
		<StyledFiltersContainer>
			<input type='text' />
			<StyledCheckbox>
				<p>Sólo activos</p>
				<input
					type='checkbox'
					onChange={() => {
						handleChecked(isActive, setIsActive);
						filterByActive(isActive, setUsers);
					}}
				/>
			</StyledCheckbox>
			<select>
				<option value='0'>Por defecto</option>
				<option value='1'>Por nombre</option>
			</select>
		</StyledFiltersContainer>
	);
};

const handleChecked = (isActive, setIsActive) => {
	setIsActive(!isActive);
};

const filterByActive = (isActive, setUsers) => {
	// Los arrays originales nunca se tocan, por eso se hace una copia del array original
	let newUsers = [...USERS];

	if (isActive) {
		newUsers = newUsers.filter(user => user.active);
		setUsers(newUsers);
	} else {
		setUsers(newUsers);
	}
};

export default FiltersContainer;
