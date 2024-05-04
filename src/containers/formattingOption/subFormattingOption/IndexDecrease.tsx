import { MdFormatIndentDecrease } from "react-icons/md";
import Formatting from "./Formatting";
import { useComposeMessageState } from "../../../state-management";

const IndexDecrease = () => {
	const { setIndexTextDecrease } = useComposeMessageState();
	return (
		<>
			<div onClick={setIndexTextDecrease}>
				<Formatting title="Indent less (Ctrl-[)" icon={<MdFormatIndentDecrease size={20} />} />
			</div>
		</>
	);
};

export default IndexDecrease;
