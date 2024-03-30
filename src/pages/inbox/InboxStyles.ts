import styled from "styled-components";

const InboxContainer = styled.div``;

const CategoryContainer = styled.div`
	border-bottom: 1px solid rgba(180, 182, 187, 0.3);
`;

const Container = styled.div`
	display: flex;
	align-items: center;

	max-width: 65%;
`;

const PrimaryWrapper = styled.div`
	align-self: stretch;
	align-items: center;
	display: flex;
	padding: 0 0 0 1rem;
	color: #0b57d0;
	position: relative;

	&::after {
		border-bottom: 3.5px solid #0b57d0;
		border-top-right-radius: 20px;
		border-top-left-radius: 20px;
		content: "";
		display: block;
		width: 90%;
		height: 3px;
		position: absolute;
		bottom: 0;
	}

	&:hover {
		cursor: pointer;
		background-color: rgba(180, 182, 187, 0.2);
	}
`;

const PrimaryIconWrapper = styled.div`
	display: flex;
	padding: 0 0 0 1rem;
`;

const PrimaryHeading = styled.h4`
	margin: 0 0 0 1.5rem;
`;

const InboxMessageContainer = styled.div`
	border-bottom: 1px solid rgba(180, 182, 187, 0.3);
	border-left: 1px solid transparent;
	border-right: 1px solid transparent;
	border-top: 1px solid transparent;
	cursor: pointer;
	transition: all 0.1s;

	& input,
	& .iconStar {
		opacity: 0.3;
		cursor: pointer;
	}

	&:hover * {
		opacity: 1;
	}

	&:hover {
		border: 0.3px solid rgba(180, 182, 187, 0.3);
		// border-right: 1px solid rgba(180, 182, 187, 0.3);
		box-shadow: 0 1.5px 0 rgba(180, 182, 187, 0.7);
	}
`;

const InboxMessageWrapper = styled.div`
	align-items: center;
	padding: 0 1rem 0 0.2rem;
	margin: 0;
`;

const InboxSubjectWrapper = styled.div`
	display: flex;
	padding: 0 2rem 0 0;
	align-items: center;
	width: 23%;
	cursor: pointer;

	position: relative;
`;

const InboxMessageBodyWrapper = styled.div`
	display: flex;
	align-items: center;
	align-self: stretch;
	width: 77%;
`;

const InboxMessageBodyWrapperSubject = styled.div`
	flex-grow: 1;
	display: flex;
	align-items: center;
`;

const InboxMessageTime = styled.h4`
	font-size: 1.2rem;
`;

export { InboxContainer, CategoryContainer, Container, PrimaryWrapper, PrimaryIconWrapper, PrimaryHeading, InboxMessageContainer, InboxMessageWrapper, InboxSubjectWrapper, InboxMessageBodyWrapper, InboxMessageBodyWrapperSubject, InboxMessageTime };
