import { HiOutlineTrash } from "react-icons/hi2";
import { LuMailOpen } from "react-icons/lu";
import { MdOutlineArchive } from "react-icons/md";
import { TbClockHour5 } from "react-icons/tb";
import { Icon } from "../../../components";
import { iconSize } from "../../../components/list/useListParams";

const Unsubscribe = () => {
	return (
		<>
			<div className="d-flex align-items-center" style={{ marginRight: "-10px" }}>
				<div className="me-3" style={{ fontSize: "1.3rem", fontWeight: "500", border: "1px solid rgba(180, 182, 187, 0.6)", borderRadius: "4px", padding: "0 .8rem .2rem .8rem" }}>
					Unsubscribe
				</div>
				<Icon>
					<MdOutlineArchive size={iconSize} />
				</Icon>

				<Icon>
					<HiOutlineTrash size={iconSize} />
				</Icon>

				<Icon>
					<LuMailOpen size={iconSize} />
				</Icon>

				<Icon>
					<TbClockHour5 size={iconSize} />
				</Icon>
			</div>
		</>
	);
};

export default Unsubscribe;
