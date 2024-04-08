import styled from "styled-components";

const Button = styled.button`
	display: flex;
	align-items: center;
	background-color: rgb(194, 231, 255);
	border-radius: 1.6rem;
	padding: 1.4rem 2.5rem 1.4rem 1.7rem;

	&:hover {
		box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
	}
`;

const Text = styled.span`
	margin: 0 0 0 1.6rem;
	font-weight: 500;
`;

const ShowRightSideWrapper = styled.div`
	width: 25px;
	position: absolute;
	right: 0;
	bottom: 0;
	background-color: #fff;
	border-top-left-radius: 20px;
	border-bottom-left-radius: 20px;
	padding: 1rem 0 1rem 0.6rem;
	cursor: pointer;
	transition: all 0.3s;

	&:hover {
		width: 50px;
		background-color: rgb(229, 236, 247);
		padding: 1rem 0 1rem 1rem;
	}
`;

const BtnSecondaryContainer = styled.button`
	display: flex;
	align-items: center;
	align-self: stretch;
	padding: 0.7rem 1.5rem;
	cursor: pointer;
	font-weight: 500;
	color: inherit;
	position: relative;

	&::after {
		content: "";
		display: block;
		height: 100%;
		width: 100%;
		border-radius: 5px;
		position: absolute;
		top: 0;
		left: 0;
		transition: all 0.15s;
		transform: scale(0);
		opacity: 0;
		border-radius: 3px;
	}

	&:hover::after {
		background-color: rgba(180, 182, 187, 0.18);
		transform: scale(1);
		opacity: 1;
		transform-origin: center;
	}
`;

const BtnPrimaryContainer = styled.button`
	background-color: rgb(26, 115, 232);
	color: #fff;
	padding: 7.5px 20px;
	font-weight: 500;

	&:hover {
		opacity: 0.9;
		box-shadow: 0 1px 2px rgba(0, 0, 255, 0.678);
	}
`;

export { Button, Text, ShowRightSideWrapper, BtnPrimaryContainer, BtnSecondaryContainer };
