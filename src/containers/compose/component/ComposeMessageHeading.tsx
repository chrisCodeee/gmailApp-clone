import { IoClose } from "react-icons/io5";
import { MdMinimize } from "react-icons/md";
import { LuMinimize2 } from "react-icons/lu";
import { ResizeIconWrapper, ResizeIcon } from "../ComposeStyles";
import { useAsideState, useComposeMessageState } from "../../../state-management";
import { RxSize } from "react-icons/rx";

export const resizeIconSize = 17;

const ComposeMessageHeading = () => {
	const { setComposeMessageStateOff } = useAsideState();

	const { setComposeMessageMinimizeStateOn, setMaximizeStateOn, maximizeState } = useComposeMessageState();

	return (
		<>
			<div
				onClick={() => {
					setComposeMessageMinimizeStateOn();
					setComposeMessageStateOff();
				}}
				className="flex-grow-1">
				New Message
			</div>
			<ResizeIconWrapper>
				<ResizeIcon
					title="Minimize"
					onClick={() => {
						setComposeMessageMinimizeStateOn();
						setComposeMessageStateOff();
					}}>
					<MdMinimize size={resizeIconSize} />
				</ResizeIcon>

				<ResizeIcon className="mx-1" onClick={setMaximizeStateOn}>
					{maximizeState ? <LuMinimize2 size={resizeIconSize} title="Exit full screen (Shift for pop-out)" /> : <RxSize size={resizeIconSize} title="Full screen (Shift for pop-out)" />}
				</ResizeIcon>

				<ResizeIcon title="Save & close" onClick={setComposeMessageStateOff}>
					<IoClose size={resizeIconSize} />
				</ResizeIcon>
			</ResizeIconWrapper>
		</>
	);
};

export default ComposeMessageHeading;
