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

export { MessageWrapper };
