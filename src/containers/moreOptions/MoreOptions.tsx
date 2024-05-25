import { MdArrowRight } from "react-icons/md";
import * as MoreOptionStyle from "./MoreOptionStyle";
import { iconSize } from "../../components/list/useListParams";
import { IoMdCalendar } from "react-icons/io";
import { useCompose } from "../../hooks";
import { IoCheckmarkSharp } from "react-icons/io5";

const MoreOptions = () => {
	const { useComposeMessage } = useCompose();

	return (
		<>
			<MoreOptionStyle.MoreOptionWrapper $maximizeState={useComposeMessage.maximizeState.toString()} onClick={useComposeMessage.setMoreOptionOff}>
				<MoreOptionStyle.DefaultFullScreen>
					<MoreOptionStyle.DefaultFullScreenWrapper $active={useComposeMessage.defaultScreenIconTickState.toString()} className="d-flex align-items-center" onClick={useComposeMessage.setDefaultScreenIconTickOn}>
						<span className="icon">{useComposeMessage.defaultScreenIconTickState && <IoCheckmarkSharp size={19} />}</span>
						<span className="text">Default to full screen</span>
					</MoreOptionStyle.DefaultFullScreenWrapper>
				</MoreOptionStyle.DefaultFullScreen>
				<MoreOptionStyle.FormatOption>
					<div className="labelOption" onMouseEnter={useComposeMessage.setMoreLabelOptionOn} onMouseLeave={useComposeMessage.setMoreLabelOptionOff}>
						<div>Label</div>
						<div>
							<MdArrowRight size={iconSize} />
						</div>
					</div>

					<MoreOptionStyle.PlainTextMode $active={useComposeMessage.iconTickState.toString()} className="d-flex align-items-center" onClick={useComposeMessage.setIconTickOn}>
						<span className="icon">{useComposeMessage.iconTickState && <IoCheckmarkSharp size={19} />}</span>
						<span className="text">Plain text mode</span>
					</MoreOptionStyle.PlainTextMode>
				</MoreOptionStyle.FormatOption>

				<MoreOptionStyle.FormatOption>
					<div className="labelOption" onClick={useComposeMessage.setNotActiveOn}>
						<div>Print</div>
						<div>
							<MdArrowRight size={iconSize} />
						</div>
					</div>

					<div
						className="checkSpelling"
						onClick={() => {
							useComposeMessage.setRecheckOn();
							useComposeMessage.setFormattingOptioneStateOff();
						}}>
						Check spelling
					</div>
				</MoreOptionStyle.FormatOption>

				<MoreOptionStyle.SetUpTimeAndDate>
					<div className="setUpTime">
						<div>
							<IoMdCalendar size={22} />
						</div>
						<div className="timeToMeet">Set up a time to meet</div>
						<div>
							<MdArrowRight size={iconSize} />
						</div>
					</div>
				</MoreOptionStyle.SetUpTimeAndDate>
			</MoreOptionStyle.MoreOptionWrapper>
		</>
	);
};

export default MoreOptions;
