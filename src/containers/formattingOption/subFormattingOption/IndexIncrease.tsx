import { MdFormatIndentIncrease } from "react-icons/md";
import Formatting from "./Formatting";

const IndexIncrease = () => {
	return (
		<>
			<Formatting title="Indent more (Ctrl-])" icon={<MdFormatIndentIncrease size={20} />} />
		</>
	);
};

export default IndexIncrease;
