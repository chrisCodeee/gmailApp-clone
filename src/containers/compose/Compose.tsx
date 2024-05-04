import { IoMdArrowDropdown } from "react-icons/io";
// import { BtnName, BtnSend, ComposeContainer, ComposeForm, ComposeFormInputContainer, ComposeMessageFooter, ComposeMessageTextArea, ComposeMessageWrapper, Divider, NewMessageContainer } from "./ComposeStyles";
import * as ComposeStyle from "./ComposeStyles";
import { useComposeMessageState, useInboxState, useNavBarState } from "../../state-management";
import { ComposeFormatIcon, ComposeMessageHeading } from "./component";
import { Link } from "react-router-dom";
import { AlignSelect, ColorSelect, FontSizeSelect, FontStyle, FormattingOption } from "..";
import MoreFormattingOPtion from "../formattingOption/MoreFormattingOPtion";

const Compose = () => {
	const { setShowMoreStateOff, setAccountProfileStateOff, setSupportStateOff, setGoogleAppStateOff } = useNavBarState();

	const { setSelectMessageTypeStateOff, setMarkAllMessageReadStateOff, setSelectInputToolStateOff } = useInboxState();

	const {
		recipientState,
		formattingOptionState,
		fontStyleState,
		maximizeState,
		fontSizeState,
		fontSize,
		fontFamilyStyle,
		moreFormattingOptionState,
		alignFormattingOptionState,
		boldState,
		italicState,
		strikethroughState,
		underlineState,
		colorState,
		color,
		alignText,
		numberList,
		bulletList,
		listType,
		indentText,
		setRecipientStateOff,
		setRecipientStateOn,
		setFontStyleStateOff,
		setFontSizeStateOff,
		setMoreFormattingOptioneStateOff,
		setAlignFormattingOptioneStateOff,
		setColorStateOff,
	} = useComposeMessageState();

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
		setAlignFormattingOptioneStateOff();
		setFontStyleStateOff();
		setFontSizeStateOff();
		setColorStateOff();
	};

	const textAreaStyle = {
		fontFamilySelect: fontFamilyStyle,
		fontSizeSelect: fontSize,
		fontStyleSelect: fontStyleState,
		boldSelect: boldState,
		italicSelect: italicState,
		underlineSelect: underlineState,
		colorSelect: color,
		align: alignText,
		listStyleList: numberList,
		listStyleBullet: bulletList,
		strikeThrough: strikethroughState,
		indentTextValue: indentText,
		listType: listType,
	};

	return (
		<>
			<ComposeStyle.ComposeContainer maximizeState={maximizeState}>
				<ComposeStyle.ComposeMessageWrapper onClick={closeAllState} maximizeState={maximizeState}>
					{/* Compose Message Heading */}
					<ComposeStyle.NewMessageContainer onClick={closeFormattingOption}>
						<ComposeMessageHeading />
					</ComposeStyle.NewMessageContainer>

					{/* Compose Message Form */}
					<div onClick={closeFormattingOption}>
						<ComposeStyle.ComposeForm>
							<ComposeStyle.ComposeFormInputContainer className="d-flex">
								{recipientState && (
									<Link to="" className="me-2" title="Select contacts">
										To
									</Link>
								)}

								<input type="email" placeholder={!recipientState ? "Recipients" : ""} className="w-100" autoFocus onClick={setRecipientStateOn} />

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
							</ComposeStyle.ComposeFormInputContainer>
							<ComposeStyle.ComposeFormInputContainer onClick={setRecipientStateOff}>
								<input type="text" placeholder="Subject" className="w-100" />
							</ComposeStyle.ComposeFormInputContainer>

							<div className="mt-2" onClick={setRecipientStateOff} style={{ height: maximizeState ? "443px" : "322px", position: "relative" }}>
								{/* <ComposeStyle.ComposeMessageTextArea textStyle={textAreaStyle} /> */}
								<ComposeStyle.ComposeMessageTextArea textStyle={textAreaStyle} contentEditable></ComposeStyle.ComposeMessageTextArea>
							</div>
						</ComposeStyle.ComposeForm>

						{/* Compose Message Footer */}
						<ComposeStyle.ComposeMessageFooter onClick={setRecipientStateOff}>
							<ComposeStyle.BtnSend title="Send (Ctrl-Enter)">
								<ComposeStyle.BtnName>Send</ComposeStyle.BtnName>

								<ComposeStyle.Divider>&nbsp;</ComposeStyle.Divider>

								<IoMdArrowDropdown size={15} />
							</ComposeStyle.BtnSend>

							{/* Compose Message Formatting Icons */}
							<ComposeFormatIcon />
						</ComposeStyle.ComposeMessageFooter>
					</div>

					{formattingOptionState && <FormattingOption />}

					{moreFormattingOptionState && <MoreFormattingOPtion />}

					{fontStyleState && <FontStyle />}

					{fontSizeState && <FontSizeSelect />}

					{colorState && <ColorSelect />}

					{alignFormattingOptionState && <AlignSelect />}
				</ComposeStyle.ComposeMessageWrapper>
			</ComposeStyle.ComposeContainer>
		</>
	);
};

export default Compose;
