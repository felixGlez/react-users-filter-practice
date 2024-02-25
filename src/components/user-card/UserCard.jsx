import {
	StyledAvatar,
	StyledButton,
	StyledName,
	StyledStatus,
	StyledUserCard
} from './styles';

const UserCard = ({ avatar, name, username, status }) => {
	return (
		<StyledUserCard>
			<StyledAvatar src={avatar} />
			<div>
				<StyledName>{name}</StyledName>
				<StyledName $weight={100}>@{username}</StyledName>
			</div>
			<StyledStatus $color={status ? 'green' : 'red'}>
				{status ? 'Activo' : 'Inactivo'}
			</StyledStatus>
			<StyledButton>Ver Detalles</StyledButton>
		</StyledUserCard>
	);
};

export default UserCard;
