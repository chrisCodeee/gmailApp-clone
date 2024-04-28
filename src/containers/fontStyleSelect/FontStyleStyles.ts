import styled from "styled-components";

const FontStyleWrapper = styled.div`
	position: absolute;
	bottom: 100px;
	left: 90px;
	padding: 0.5rem 0;
	background-color: #fff;
	border-radius: 5px;
	box-shadow: rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px, rgba(0, 0, 0, 0.2) 0px 2px 4px -1px;

	& div {
		padding: 0.5rem 5rem 0.5rem 5rem;
		cursor: pointer;
	}
`;

export { FontStyleWrapper };
