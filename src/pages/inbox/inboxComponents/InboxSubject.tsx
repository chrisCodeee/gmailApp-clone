import { RiStarSLine } from "react-icons/ri";
import { SelectItemsHover } from ".";
import { Icon } from "../../../components";
import { iconSize } from "../../../components/list/useListParams";
import { InboxSubjectWrapper } from "../InboxStyles";
import { useInboxState } from "../../../state-management";

export type InboxSubjectProps = {
	subject: string;
};
// interface InboxSubjectProps {
// 	subject: InboxSubject;
// }

const InboxSubject = ({ subject }: InboxSubjectProps) => {
	const { inboxState } = useInboxState();
	return (
		<>
			<InboxSubjectWrapper>
				{/* <div> */}
				<Icon>
					{inboxState && <SelectItemsHover />}
					<input type="checkbox" />
				</Icon>
				{/* </div> */}

				<div className="iconStar" style={{ marginLeft: "-13px" }}>
					<Icon>
						<RiStarSLine size={iconSize} />
					</Icon>
				</div>

				<h4>{subject}</h4>
			</InboxSubjectWrapper>
		</>
	);
};

export default InboxSubject;
