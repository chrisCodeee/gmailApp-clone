import styled from "styled-components";

const ComposeContainer = styled.div<{ maximizeState: boolean }>`
	height: ${(props) => props.maximizeState && "100vh"};
	width: ${(props) => props.maximizeState && "100vw"};
	background-color: ${(props) => props.maximizeState && "rgba(0,0,0,.5)"};
	position: ${(props) => props.maximizeState && "absolute"};
	top: ${(props) => props.maximizeState && "0"};
	left: ${(props) => props.maximizeState && "0"};
	right: ${(props) => props.maximizeState && "0"};
	z-index: ${(props) => props.maximizeState && "100000"};
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ComposeMessageWrapper = styled.div<{ maximizeState: boolean }>`
	width: ${(props) => (props.maximizeState ? "80%" : "55rem")};
	height: ${(props) => (props.maximizeState ? "89vh" : "50rem")};
	box-shadow: ${(props) => !props.maximizeState && "0 0 4px rgb(180, 182, 187)"};
	position: ${(props) => !props.maximizeState && "fixed"};
	bottom: ${(props) => !props.maximizeState && "0"};
	right: ${(props) => !props.maximizeState && "65px"};
	border-radius: 8px;
	z-index: 100;
	background-color: #fff;
`;

const ResizeIcon = styled.div`
	cursor: pointer;
	display: flex;
	border-radius: 2px;

	&:hover {
		background-color: rgba(180, 182, 187, 0.2);
	}
`;

const NewMessageContainer = styled.div`
	font-weight: 500;
	cursor: pointer;
	background-color: rgba(26, 115, 232, 0.05);
	display: flex;
	justify-content: space-between;
	padding: 1rem 1rem 1rem 1.5rem;
`;

const ResizeIconWrapper = styled.div`
	display: flex;
	align-items: center;
	aign-self: stretch;
`;

const ComposeForm = styled.form`
	padding: 0 1rem 1rem 1.5rem;

	& a:hover {
		text-decoration: underline;
	}
`;

const ComposeFormInputContainer = styled.div`
	border-bottom: 1px solid rgba(180, 182, 187, 0.3);
	padding: 0.7rem 0;
`;

const ComposeMessageTextArea = styled.textarea<{ fontFamily: string }>`
	border: 0;
	outline: 0;
	border-bottom: 1px solid rgba(180, 182, 187, 0.3);
	width: 100%;
	font-family: ${(props) => props.fontFamily};
`;

const ComposeMessageFooter = styled.div`
	padding: 0;
	margin: 0.5rem 0 0 0;
	display: flex;
	align-items: center;
`;

const BtnSend = styled.button`
	border-radius: 30px;
	width: 100px;
	padding: 0 10px 0 20px;
	background-color: rgb(11, 87, 208);
	color: #fff;
	font-weight: 500;
	display: flex;
	align-items: center;

	&:hover {
		opacity: 0.9;
		box-shadow: 0 1px 2px rgba(0, 0, 255, 0.678);
	}
`;

const Divider = styled.div`
	width: 0.7px;
	background-color: rgba(0, 0, 0, 0.5);
	align-self: stretch;
	margin: 0 0.7rem 0 0;
`;

const BtnName = styled.div`
	padding: 7px 0;
	margin: 0 auto 0 0;
`;

const FormatIconWrapper = styled.div`
	display: flex;
	margin: 0 0 0 0.6rem;
`;

const FormatIconContainer = styled.div<{ margin: string; padding: string }>`
	padding: ${(props) => props.padding};
	margin: ${(props) => props.margin};
	border-radius: 3px;
	cursor: pointer;
	display: flex;
	transition: all 0.3s;
	color: rgba(32, 33, 36, 0.7);

	&:hover {
		background-color: rgba(180, 182, 187, 0.2);
	}
`;

const ComposeMessageHeadingWrapper = styled.div`
	position: fixed;
	cursor: pointer;
	bottom: 0;
	right: 65px;
	border-radius: 3px;
	z-index: 200;
	width: 260px;
	font-weight: 500;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	background-color: rgb(242, 246, 252);
	display: flex;
	justify-content: space-between;
	padding: 1rem 1rem 1rem 1.5rem;
`;

export { ComposeContainer, ComposeMessageWrapper, NewMessageContainer, ResizeIconWrapper, ComposeForm, ComposeFormInputContainer, ComposeMessageTextArea, ComposeMessageFooter, BtnSend, Divider, BtnName, FormatIconContainer, FormatIconWrapper, ResizeIcon, ComposeMessageHeadingWrapper };
