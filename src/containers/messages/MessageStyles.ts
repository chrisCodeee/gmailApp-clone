import styled from "styled-components";

const MessageWrapper = styled.div`
	height: 80vh;
	overflow-y: auto;
	margin: 2rem 0 0 0;

	@media screen and (max-width: 992px) {
		height: 90vh;
	}

	&::-webkit-scrollbar {
		width: 12px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #888;
	}

	&::-webkit-scrollbar-track-piece {
		background-color: #cccccc54;
	}
`;

const UpperMessageWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const FlexWrapper = styled.div`
	display: flex;
	align-items: center;
	margin: 0 1rem 0 0;
`;
const FlexWrapperArrow = styled.div`
	display: flex;
	align-items: center;
	align-self: stretch;
	border-radius: 3px;
	cursor: pointer;

	&:hover {
		background-color: rgba(180, 182, 187, 0.2);
	}
`;

const FlexWrapperCheckbox = styled.div`
	display: flex;
	align-items: center;
	align-self: stretch;
	padding: 1rem 0.5rem;
	border-radius: 3px;
	cursor: pointer;

	&:hover {
		background-color: rgba(180, 182, 187, 0.2);
	}
`;

const MessageCount = styled.div`
	padding: 0.8rem 0.5rem;
	font-size: 1.3rem;
	border-radius: 3px;
	cursor: pointer;

	&:hover {
		background-color: rgba(180, 182, 187, 0.3);
	}
`;
export { MessageWrapper, UpperMessageWrapper, FlexWrapper, FlexWrapperCheckbox, FlexWrapperArrow, MessageCount };
