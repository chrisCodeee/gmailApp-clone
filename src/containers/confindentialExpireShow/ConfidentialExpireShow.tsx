import { IoClose } from "react-icons/io5";
import { Icon } from "../../components";
import { useCompose } from "../../hooks";
import { ConfidentialModeImage } from "../../assets";
import * as ConfidentialExpireShowStyle from "./ConfidentialExpireShowStyle";
import { currentDate } from "../confidentialModeExpire/confidentialModeParams";

const ConfidentialExpireShow = () => {
	const { useComposeMessage } = useCompose();
	return (
		<>
			<ConfidentialExpireShowStyle.ConfidentialExpireShowWrapper>
				<ConfidentialExpireShowStyle.ConfidentialExpireShowContainer>
					<ConfidentialExpireShowStyle.ConfidentialIconLockWrapper className="col-2">
						<img src={ConfidentialModeImage} alt="Lock clock" />
					</ConfidentialExpireShowStyle.ConfidentialIconLockWrapper>
					<ConfidentialExpireShowStyle.ConfidentialModeExpireTimeWrapper>
						<div>Content expires {useComposeMessage.confidentialModeExpireNextTimeShowState && useComposeMessage.confidentialModeExpireNextTimeShow ? useComposeMessage.confidentialModeExpireNextTimeShow : currentDate.slice(5, currentDate.length)}.</div>
						<p>Recipients won't have the option to forward, copy, print, or download this email.</p>
					</ConfidentialExpireShowStyle.ConfidentialModeExpireTimeWrapper>

					<ConfidentialExpireShowStyle.ConfidentialModeExpireButtonWrapper>
						<ConfidentialExpireShowStyle.ConfidentialModeExpireButtonContainer>
							<button onClick={useComposeMessage.setConfidentialModeOn}>Edit</button>
							<div onClick={useComposeMessage.setConfidentialModeTimeShowOff}>
								<Icon>
									<IoClose size={22} />
								</Icon>
							</div>
						</ConfidentialExpireShowStyle.ConfidentialModeExpireButtonContainer>
					</ConfidentialExpireShowStyle.ConfidentialModeExpireButtonWrapper>
				</ConfidentialExpireShowStyle.ConfidentialExpireShowContainer>
			</ConfidentialExpireShowStyle.ConfidentialExpireShowWrapper>
		</>
	);
};

export default ConfidentialExpireShow;
