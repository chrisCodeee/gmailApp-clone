import { MdFormatIndentDecrease } from "react-icons/md";
import Formatting from "./Formatting";

const IndexDecrease = () => {
	return (
		<>
			<Formatting title="Indent less (Ctrl-[)" icon={<MdFormatIndentDecrease size={20} />} />
		</>
	);
};

export default IndexDecrease;
