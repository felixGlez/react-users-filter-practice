import { StyledCheckbox, StyledFiltersContainer } from './styles';

const FiltersContainer = ({ action }) => {
	return (
		<StyledFiltersContainer>
			<input type='text' />
			<StyledCheckbox>
				<p>Sólo activos</p>
				<input type='checkbox' onChange={action} />
			</StyledCheckbox>
			<select>
				<option value='Por nombre'>Por defecto</option>
				<option value='Por nombre'>Por nombre</option>
			</select>
		</StyledFiltersContainer>
	);
};

export default FiltersContainer;
