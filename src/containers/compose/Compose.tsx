import { IoMdArrowDropdown } from "react-icons/io";
import { BtnName, BtnSend, ComposeContainer, ComposeForm, ComposeFormInputContainer, ComposeMessageFooter, ComposeMessageTextArea, ComposeMessageWrapper, Divider, NewMessageContainer } from "./ComposeStyles";
import { useComposeMessageState, useInboxState, useNavBarState } from "../../state-management";
import { ComposeFormatIcon, ComposeMessageHeading } from "./component";
import { Link } from "react-router-dom";
import { FontSizeSelect, FontStyle, FormattingOption } from "..";
import MoreFormattingOPtion from "../formattingOption/MoreFormattingOPtion";

const Compose = () => {
	const { setShowMoreStateOff, setAccountProfileStateOff, setSupportStateOff, setGoogleAppStateOff } = useNavBarState();

	const { setSelectMessageTypeStateOff, setMarkAllMessageReadStateOff, setSelectInputToolStateOff } = useInboxState();

	const { recipientState, formattingOptionState, fontStyleState, maximizeState, fontSizeState, fontSize, fontFamilyStyle, moreFormattingOptionState, setRecipientStateOff, setRecipientStateOn, setFontStyleStateOff, setFontSizeStateOff, setMoreFormattingOptioneStateOff } = useComposeMessageState();

	const closeAllState = () => {
		setShowMoreStateOff();
		setAccountProfileStateOff();
		setSupportStateOff();
		setGoogleAppStateOff();
		setSelectInputToolStateOff();
		setMarkAllMessageReadStateOff();
		setSelectMessageTypeStateOff();
	};

	const closeFormattingOption = () => {
		setMoreFormattingOptioneStateOff();
		setFontStyleStateOff();
		setFontSizeStateOff();
	};

	return (
		<>
			<ComposeContainer maximizeState={maximizeState}>
				<ComposeMessageWrapper onClick={closeAllState} maximizeState={maximizeState}>
					{/* Compose Message Heading */}
					<NewMessageContainer onClick={closeFormattingOption}>
						<ComposeMessageHeading />
					</NewMessageContainer>

					{/* Compose Message Form */}
					<ComposeForm>
						<div onClick={closeFormattingOption}>
							<ComposeFormInputContainer className="d-flex">
								{recipientState && (
									<Link to="" className="me-2" title="Select contacts">
										To
									</Link>
								)}

								<input type="email" placeholder={!recipientState ? "Recipients" : ""} className="w-100" required autoFocus onClick={setRecipientStateOn} />

								{recipientState && (
									<div className="d-flex">
										<Link to="" className="me-2" title="Add Cc recipients (Ctrl-Shift-C)">
											Cc
										</Link>

										<Link to="" className="pe-3" title="Add Bcc recipients (Ctrl-Shift-B)">
											Bcc
										</Link>
									</div>
								)}
							</ComposeFormInputContainer>
							<ComposeFormInputContainer onClick={setRecipientStateOff}>
								<input type="text" placeholder="Subject" className="w-100" />
							</ComposeFormInputContainer>

							<div className="mt-2" onClick={setRecipientStateOff} style={{ height: maximizeState ? "443px" : "322px" }}>
								<ComposeMessageTextArea fontFamily={fontFamilyStyle} fontSize={fontSize} />
							</div>

							{/* Compose Message Footer */}
							<ComposeMessageFooter onClick={setRecipientStateOff} maximizeState={maximizeState}>
								<BtnSend title="Send (Ctrl-Enter)">
									<BtnName>Send</BtnName>

									<Divider>&nbsp;</Divider>

									<IoMdArrowDropdown size={15} />
								</BtnSend>

								{/* Compose Message Formatting Icons */}
								<ComposeFormatIcon />
							</ComposeMessageFooter>
						</div>

						{formattingOptionState && <FormattingOption />}

						{moreFormattingOptionState && <MoreFormattingOPtion />}

						{fontStyleState && <FontStyle />}

						{fontSizeState && <FontSizeSelect />}
					</ComposeForm>
				</ComposeMessageWrapper>
			</ComposeContainer>
		</>
	);
};

export default Compose;
