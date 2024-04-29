import styled from "styled-components";

const FontStyleWrapper = styled.div<{ maximizeState: boolean }>`
	position: absolute;
	width: 200px;
	bottom: ${(props) => (props.maximizeState ? "140px" : "100px")};
	left: ${(props) => (props.maximizeState ? "240px" : "90px")};
	padding: 0.5rem 0;
	background-color: #fff;
	border-radius: 5px;
	box-shadow: rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px, rgba(0, 0, 0, 0.2) 0px 2px 4px -1px;
`;

const FontStyleSelectWrapper = styled.button`
	padding: 0.5rem 5rem 0.5rem 1.8rem;
	text-align: start;
	width: 100%;
	cursor: pointer;
	display: flex;

	&:hover {
		background-color: rgba(180, 182, 187, 0.3);
	}
`;

export { FontStyleWrapper, FontStyleSelectWrapper };
