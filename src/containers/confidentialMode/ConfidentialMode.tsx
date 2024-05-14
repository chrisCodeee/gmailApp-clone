import { Link } from "react-router-dom";
import * as ConfidentialModeStyle from "./ConfidentialModeStyle";
import { MdArrowDropDown } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { BtnPrimary, BtnSecondary, Icon } from "../../components";
import { useCompose } from "../../hooks";
import ConfidentialModeExpire from "../confidentialModeExpire/ConfidentialModeExpire";
import { currentDate } from "../confidentialModeExpire/confidentialModeParams";

const ConfidentialMode = () => {
	const { useComposeMessage } = useCompose();

	return (
		<>
			<ConfidentialModeStyle.ConfidentialModeWrapper>
				<ConfidentialModeStyle.ConfidentialModeContainer>
					<ConfidentialModeStyle.ConfidentialModeHeading>Confidential mode</ConfidentialModeStyle.ConfidentialModeHeading>

					<p>
						Recipients won't have the option to forward, copy, print, or download this email. {""}
						<Link to="https://support.google.com/mail/answer/7674059?hl=en">Learn more</Link>
					</p>

					<ConfidentialModeStyle.ConfidentialModeSubHeading>set expiration</ConfidentialModeStyle.ConfidentialModeSubHeading>

					<ConfidentialModeStyle.ConfidentialModeTimeWrapper>
						<ConfidentialModeStyle.ConfidentialModeTimeCategory className="col" onClick={useComposeMessage.setConfidentialModeExpireOn}>
							<div>{useComposeMessage.confidentialModeExpireTime ? useComposeMessage.confidentialModeExpireTime : "Expires in 1 week"}</div>

							<MdArrowDropDown />
						</ConfidentialModeStyle.ConfidentialModeTimeCategory>

						<div className="col">{useComposeMessage.confidentialModeExpireNextTime ? useComposeMessage.confidentialModeExpireNextTime : currentDate}</div>
					</ConfidentialModeStyle.ConfidentialModeTimeWrapper>

					<div>
						<ConfidentialModeStyle.ConfidentialModeSubHeading>require passcode</ConfidentialModeStyle.ConfidentialModeSubHeading>

						<ConfidentialModeStyle.ConfidentialModePasscodeWrapper>
							<span>All passcodes will be generated by Google.</span>
							<div>
								<Icon>
									<IoMdHelpCircleOutline size={22} color="rgb(32, 33, 36)" />
								</Icon>
							</div>
						</ConfidentialModeStyle.ConfidentialModePasscodeWrapper>
					</div>

					<ConfidentialModeStyle.ConfidentialModeSMSPasscodeWrapper>
						<ConfidentialModeStyle.ConfidentialModeRadioWrapper className="col me-3">
							<Icon>
								<input type="radio" name="sms" id="noSMS" defaultChecked />
							</Icon>
							<label htmlFor="noSMS">No SMS passcode</label>
						</ConfidentialModeStyle.ConfidentialModeRadioWrapper>

						<ConfidentialModeStyle.ConfidentialModeRadioWrapper className="col">
							<Icon>
								<input type="radio" name="sms" id="SMS" />
							</Icon>
							<label htmlFor="SMS">SMS passcode</label>
						</ConfidentialModeStyle.ConfidentialModeRadioWrapper>
					</ConfidentialModeStyle.ConfidentialModeSMSPasscodeWrapper>

					<ConfidentialModeStyle.ConfidentialModeBtnWrapper>
						<ConfidentialModeStyle.ConfidentialModeBtnContainer onClick={useComposeMessage.setConfidentialModeOff}>
							<BtnSecondary name="Cancel" borderRadius="20px" />
						</ConfidentialModeStyle.ConfidentialModeBtnContainer>

						<ConfidentialModeStyle.ConfidentialModeBtnContainer onClick={useComposeMessage.setConfidentialModeTimeShowOn}>
							<BtnPrimary name="Save" borderRadius="20px" padding="7.5px 25px" />
						</ConfidentialModeStyle.ConfidentialModeBtnContainer>
					</ConfidentialModeStyle.ConfidentialModeBtnWrapper>

					{useComposeMessage.confidentialModeExpireState && <ConfidentialModeExpire />}
				</ConfidentialModeStyle.ConfidentialModeContainer>
			</ConfidentialModeStyle.ConfidentialModeWrapper>
		</>
	);
};

export default ConfidentialMode;
