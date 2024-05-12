import { BtnPrimary } from "../../components";
import { useCompose } from "../../hooks";
import * as AlertStyle from "./AlertStyle";

const Alert = () => {
	const { useComposeMessage } = useCompose();
	return (
		<>
			<AlertStyle.AlertWrapper>
				<AlertStyle.AlertContainer>
					<AlertStyle.AlertFlexContainer>
						<div>The URL is not valid and cannot be loaded.</div>
						<AlertStyle.AlertBtnWrapper>
							<div onClick={useComposeMessage.setAlertOff}>
								<BtnPrimary name="Cancel" borderRadius="30px" />
							</div>
						</AlertStyle.AlertBtnWrapper>
					</AlertStyle.AlertFlexContainer>
				</AlertStyle.AlertContainer>
			</AlertStyle.AlertWrapper>
		</>
	);
};

export default Alert;
