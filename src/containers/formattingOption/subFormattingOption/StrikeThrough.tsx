import { PiTextStrikethroughBold } from "react-icons/pi";
import Formatting from "./Formatting";
import { useComposeMessageState } from "../../../state-management";

const StrikeThrough = () => {
	const { setStrikethroughStateOn } = useComposeMessageState();
	return (
		<>
			<div onClick={setStrikethroughStateOn}>
				<Formatting title="Strikethrough (Alt-Shift-5)" icon={<PiTextStrikethroughBold size={20} />} />
			</div>
		</>
	);
};

export default StrikeThrough;
