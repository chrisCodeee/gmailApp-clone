import { IoMdArrowDropdown } from "react-icons/io";
import * as ComposeStyle from "./ComposeStyles";
import { ComposeFormatIcon, ComposeMessageHeading } from "./component";
import { Link } from "react-router-dom";
import { AlignSelect, ColorSelect, FontSizeSelect, FontStyle, FormattingOption } from "..";
import MoreFormattingOPtion from "../formattingOption/MoreFormattingOPtion";
import { useCompose } from "../../hooks";

const Compose = () => {
	const { textAreaStyle, closeAllState, closeFormattingOption, useComposeMessage } = useCompose();
	return (
		<>
			<ComposeStyle.ComposeContainer maximizeState={useComposeMessage.maximizeState}>
				<ComposeStyle.ComposeMessageWrapper onClick={closeAllState} maximizeState={useComposeMessage.maximizeState}>
					{/* Compose Message Heading */}
					<ComposeStyle.NewMessageContainer onClick={closeFormattingOption}>
						<ComposeMessageHeading />
					</ComposeStyle.NewMessageContainer>

					{/* Compose Message Form */}
					<div onClick={closeFormattingOption}>
						<ComposeStyle.ComposeForm>
							<ComposeStyle.ComposeFormInputContainer className="d-flex">
								{useComposeMessage.recipientState && (
									<Link to="" className="me-2" title="Select contacts">
										To
									</Link>
								)}

								<input type="email" placeholder={!useComposeMessage.recipientState ? "Recipients" : ""} className="w-100" autoFocus onClick={useComposeMessage.setRecipientStateOn} />

								{useComposeMessage.recipientState && (
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
							<ComposeStyle.ComposeFormInputContainer onClick={useComposeMessage.setRecipientStateOff}>
								<input type="text" placeholder="Subject" className="w-100" />
							</ComposeStyle.ComposeFormInputContainer>

							<div className="mt-2" onClick={useComposeMessage.setRecipientStateOff} style={{ height: useComposeMessage.maximizeState ? "443px" : "322px", position: "relative" }}>
								{/* <ComposeStyle.ComposeMessageTextArea textStyle={textAreaStyle} /> */}
								<ComposeStyle.ComposeMessageTextArea textStyle={textAreaStyle} contentEditable></ComposeStyle.ComposeMessageTextArea>
							</div>
						</ComposeStyle.ComposeForm>

						{/* Compose Message Footer */}
						<ComposeStyle.ComposeMessageFooter onClick={useComposeMessage.setRecipientStateOff}>
							<ComposeStyle.BtnSend title="Send (Ctrl-Enter)">
								<ComposeStyle.BtnName>Send</ComposeStyle.BtnName>

								<ComposeStyle.Divider>&nbsp;</ComposeStyle.Divider>

								<IoMdArrowDropdown size={15} />
							</ComposeStyle.BtnSend>

							{/* Compose Message Formatting Icons */}
							<ComposeFormatIcon />
						</ComposeStyle.ComposeMessageFooter>
					</div>

					{useComposeMessage.formattingOptionState && <FormattingOption />}

					{useComposeMessage.moreFormattingOptionState && <MoreFormattingOPtion />}

					{useComposeMessage.fontStyleState && <FontStyle />}

					{useComposeMessage.fontSizeState && <FontSizeSelect />}

					{useComposeMessage.colorState && <ColorSelect />}

					{useComposeMessage.alignFormattingOptionState && <AlignSelect />}
				</ComposeStyle.ComposeMessageWrapper>
			</ComposeStyle.ComposeContainer>
		</>
	);
};

export default Compose;
