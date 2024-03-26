import styled from "styled-components";

const MainContainer = styled.main`
	display: flex;
	margin: 1rem 0 0 0;
`;

const LeftAsideContainer = styled.aside`
	min-width: 25rem;
`;

const RightAsideContainer = styled.aside`
	padding: 2rem 1rem;
`;

const MessageContainer = styled.div`
	flex-grow: 1;
	background-color: #fff;
	border-radius: 20px;
	padding: 0.3rem 0 1rem 1.2rem;
`;

export { MainContainer, MessageContainer, LeftAsideContainer, RightAsideContainer };
