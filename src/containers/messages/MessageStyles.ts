import styled from "styled-components";

const MessageWrapper = styled.div`
	height: 80vh;
	overflow-y: auto;
	margin: 2rem 0 0 0;

	@media screen and (max-width: 992px) {
		height: 90vh;
	}
`;

export { MessageWrapper };
