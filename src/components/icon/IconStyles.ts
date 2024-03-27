import styled from "styled-components";

const IconContainer = styled.div`
	border-radius: 100%;
	padding: 2rem;
	cursor: pointer;
	height: 30px;
	width: 30px;

	display: flex;
	align-items: center;
	justify-content: center;

	& span {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	&:hover {
		background-color: rgba(180, 182, 187, 0.2);
	}
`;

export { IconContainer };
