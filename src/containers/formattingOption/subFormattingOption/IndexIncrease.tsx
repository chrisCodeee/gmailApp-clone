import { MdFormatIndentIncrease } from "react-icons/md";
import Formatting from "./Formatting";
import { useComposeMessageState } from "../../../state-management";

const IndexIncrease = () => {
	const { setIndexTextIncrease } = useComposeMessageState();
	return (
		<>
			<div onClick={setIndexTextIncrease}>
				<Formatting title="Indent more (Ctrl-])" icon={<MdFormatIndentIncrease size={20} />} />
			</div>
		</>
	);
};

export default IndexIncrease;
