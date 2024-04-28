import styled from "styled-components";

const FormattingOptionWrapper = styled.div<{ maximizeState: boolean }>`
	position: absolute;
	bottom: ${(props) => (props.maximizeState ? "110px" : "70px")};
	left: ${(props) => (props.maximizeState ? "170px" : "0")};
	width: ${(props) => (props.maximizeState ? "fit-content" : "100%")};
	font-weight: 500;
	padding: ${(props) => !props.maximizeState && "0 15px"};
`;

const FormattingOptionContainer = styled.div<{ maximizeState: boolean }>`
	display: flex;
	justify-content: ${(props) => !props.maximizeState && "space-between"};
	align-items: center;
	background-color: #fff;
	box-shadow: rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px, rgba(0, 0, 0, 0.2) 0px 2px 4px -1px;
	padding: 3.5px 0;
	border-radius: 3px;
`;

const FormatFlexContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const FormatDivider = styled.div`
	width: 1px;
	height: 19px;
	background-color: #eee;
	margin: 0 0.3rem;
`;

const MoreFormattingOptionWrapper = styled.div`
	box-shadow: rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px, rgba(0, 0, 0, 0.2) 0px 2px 4px -1px;
	position: absolute;
	right: 10px;
	bottom: 100px;
	background-color: #fff;
	padding: 0.3rem;
`;

export { FormattingOptionWrapper, FormattingOptionContainer, FormatFlexContainer, FormatDivider, MoreFormattingOptionWrapper };
