import { IoMdArrowDropdown } from "react-icons/io";
import { BtnName, BtnSend, ComposeContainer, ComposeForm, ComposeFormInputContainer, ComposeMessageFooter, ComposeMessageTextArea, ComposeMessageWrapper, Divider, NewMessageContainer } from "./ComposeStyles";
import { useComposeMessageState, useInboxState, useNavBarState } from "../../state-management";
import { ComposeFormatIcon, ComposeMessageHeading } from "./component";
import { Link } from "react-router-dom";
import { useState } from "react";

const Compose = () => {
	const { setShowMoreStateOff, setAccountProfileStateOff, setSupportStateOff, setGoogleAppStateOff } = useNavBarState();
	const { setSelectMessageTypeStateOff, setMarkAllMessageReadStateOff, setSelectInputToolStateOff } = useInboxState();

	const closeAllState = () => {
		setShowMoreStateOff();
		setAccountProfileStateOff();
		setSupportStateOff();
		setGoogleAppStateOff();
		setSelectInputToolStateOff();
		setMarkAllMessageReadStateOff();
		setSelectMessageTypeStateOff();
	};

	const { maximizeState } = useComposeMessageState();

	const [to, setTo] = useState(true);
	return (
		<>
			<ComposeContainer maximizeState={maximizeState}>
				<ComposeMessageWrapper onClick={closeAllState} maximizeState={maximizeState}>
					{/* Compose Message Heading */}
					<NewMessageContainer>
						<ComposeMessageHeading />
					</NewMessageContainer>

					{/* Compose Message Form */}
					<ComposeForm>
						<ComposeFormInputContainer className="d-flex">
							{to && (
								<Link to="" className="me-2">
									To
								</Link>
							)}
							<input type="email" placeholder={!to ? "Recipients" : ""} className="w-100" required autoFocus onClick={() => setTo(true)} />
							{to && (
								<div className="d-flex">
									<Link to="" className="me-2">
										Cc
									</Link>
									<Link to="" className="me-2">
										Bcc
									</Link>
								</div>
							)}
						</ComposeFormInputContainer>

						<ComposeFormInputContainer onClick={() => setTo(false)}>
							<input type="text" placeholder="Subject" className="w-100" />
						</ComposeFormInputContainer>

						<div className="mt-2" onClick={() => setTo(false)}>
							<ComposeMessageTextArea rows={maximizeState ? 21 : 15} />
						</div>

						{/* Compose Message Footer */}
						<ComposeMessageFooter onClick={() => setTo(false)}>
							<BtnSend title="Send (Ctrl-Enter)">
								<BtnName>Send</BtnName>
								<Divider>&nbsp;</Divider>
								<IoMdArrowDropdown size={15} />
							</BtnSend>

							{/* Compose Message Formatting Icons */}
							<ComposeFormatIcon />
						</ComposeMessageFooter>
					</ComposeForm>
				</ComposeMessageWrapper>
			</ComposeContainer>
		</>
	);
};

export default Compose;
