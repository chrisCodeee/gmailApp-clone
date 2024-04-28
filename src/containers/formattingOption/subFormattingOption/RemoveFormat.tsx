import { LiaRemoveFormatSolid } from "react-icons/lia";
import Formatting from "./Formatting";

const RemoveFormat = () => {
	return (
		<>
			<Formatting title="Remove formatting (Ctrl-\)" icon={<LiaRemoveFormatSolid size={20} />} />
		</>
	);
};

export default RemoveFormat;
