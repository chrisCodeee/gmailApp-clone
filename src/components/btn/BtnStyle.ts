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

export { Button, Text, ShowRightSideWrapper };
