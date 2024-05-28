import styled from "styled-components";

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

export { SelectContactWrapper, SelectContactContainer };
