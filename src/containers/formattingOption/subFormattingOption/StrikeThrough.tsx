import { PiTextStrikethroughBold } from "react-icons/pi";
import Formatting from "./Formatting";

const StrikeThrough = () => {
	return (
		<>
			<Formatting title="Strikethrough (Alt-Shift-5)" icon={<PiTextStrikethroughBold size={20} />} />
		</>
	);
};

export default StrikeThrough;
