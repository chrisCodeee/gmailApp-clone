import styled from "styled-components";

const flex = `
display: flex;
align-items: center;
`;

const SelectContactWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(255, 255, 255, 0.5);
	z-index: 900000000;

	display: flex;
	align-items: center;
	justify-content: center;
`;

const SelectContactContainer = styled.div`
	width: 650px;
	height: 600px;
	background-color: #fff;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	border-radius: 5px;
	border: 1px solid rgba(0, 0, 0, 0.4);
`;

const SelectContactHeader = styled.div`
	${flex};
	justify-content: space-between;
	padding: 1.2rem 2rem;
`;

const ContactIconContainer = styled.div`
	${flex};
`;

const IconContainer = styled.div`
	width: 20px;
	height: 20px;

	& img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const IconText = styled.div`
	margin: 0 0 0 0.9rem;
	font-weight: 500;
	font-size: 1.6rem;
`;

const SearchButton = styled.button`
	${flex};
	flex-grow: 1;
	border-radius: 3px;
	padding: 1rem 1.5rem;
	position: relative;
	margin: 0 0.2rem 0 2rem;
	background-color: rgba(0, 0, 0, 0.04);

	& input {
		margin: 0 0 0 3rem;
		width: 100%;
		font-size: 1.7rem;
	}
`;

const SearchIcon = styled.div`
	${flex};
	position: absolute;
	left: 10px;
`;

export { SelectContactWrapper, SelectContactContainer, SelectContactHeader, ContactIconContainer, IconContainer, IconText, SearchButton, SearchIcon };
