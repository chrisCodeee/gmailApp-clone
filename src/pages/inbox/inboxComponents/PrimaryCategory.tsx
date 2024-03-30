import { MdInbox } from "react-icons/md";
import { PrimaryWrapper, PrimaryIconWrapper, PrimaryHeading } from "../InboxStyles";
import { iconSize } from "../../../components/list/useListParams";

const PrimaryCategory = () => {
	return (
		<>
			<PrimaryWrapper className="col">
				<PrimaryIconWrapper>
					<MdInbox size={iconSize} />
					<PrimaryHeading>Primary</PrimaryHeading>
				</PrimaryIconWrapper>
			</PrimaryWrapper>
		</>
	);
};

export default PrimaryCategory;
