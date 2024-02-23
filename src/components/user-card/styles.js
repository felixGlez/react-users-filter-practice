import styled from 'styled-components';

const StyledUserCard = styled.div`
	width: 500px;
	display: flex;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px;
	justify-content: space-between;
	align-items: center;
	padding: 10px;
	border-radius: 15px;
	margin: 0.5rem;
`;

const StyledAvatar = styled.img`
	width: 50px;
	border-radius: 50%;
`;

const StyledName = styled.h3`
	font-size: 1rem;
	margin: 0.2rem;
	font-weight: ${({ $weight }) => $weight};
`;

const StyledStatus = styled.p`
	color: green;
`;

const StyledButton = styled.button`
	height: 20px;
`;

export { StyledUserCard, StyledAvatar, StyledName, StyledStatus, StyledButton };
