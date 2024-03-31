import { HiOutlineTrash } from "react-icons/hi2";
import { LuMailOpen } from "react-icons/lu";
import { MdOutlineArchive } from "react-icons/md";
import { TbClockHour5 } from "react-icons/tb";
import { Icon } from "../../../components";
import { iconSize } from "../../../components/list/useListParams";
import { UnsubscribeText, UnsubscribeWrapper } from "../InboxStyles";

const Unsubscribe = () => {
	return (
		<>
			<UnsubscribeWrapper>
				<UnsubscribeText>Unsubscribe</UnsubscribeText>
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
			</UnsubscribeWrapper>
		</>
	);
};

export default Unsubscribe;
