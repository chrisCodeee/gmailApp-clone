import { IoMdMore } from "react-icons/io";
import { iconSize } from "../../../components/list/useListParams";

const SelectItemsHover = () => {
	return (
		<>
			<div className="d-flex" style={{ position: "absolute", left: "-7px", opacity: ".3" }}>
				<IoMdMore size={iconSize} />
				<IoMdMore size={iconSize} style={{ marginLeft: "-13px" }} />
			</div>
		</>
	);
};

export default SelectItemsHover;
