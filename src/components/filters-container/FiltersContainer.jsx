import { useState } from 'react';
import { StyledCheckbox, StyledFiltersContainer } from './styles';

const FiltersContainer = () => {
	const [isActive, setIsActive] = useState(false);
	return (
		<StyledFiltersContainer>
			<input type='text' />
			<StyledCheckbox>
				<p>Sólo activos</p>
				<input
					type='checkbox'
					onChange={() => displayActives(isActive, setIsActive)}
				/>
			</StyledCheckbox>
			<select>
				<option value='Por nombre'>Por defecto</option>
				<option value='Por nombre'>Por nombre</option>
			</select>
		</StyledFiltersContainer>
	);
};

const displayActives = (isActive, setIsActive) => {
	setIsActive(!isActive);
};

export default FiltersContainer;
