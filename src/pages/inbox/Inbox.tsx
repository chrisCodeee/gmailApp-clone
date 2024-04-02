import { useState } from "react";
import { useInboxState } from "../../state-management";
import { InboxContainer } from "./InboxStyles";
import { InboxCategoryContainer, InboxMessages } from "./inboxContainers";
import { InboxMessagePropsCombine } from "./inboxContainers/InboxMessages";
import { inboxMessageDetails } from "./useInboxParams";
// import { Navigate, useNavigate } from "react-router-dom";

const Inbox = () => {
	const { setInboxStateOn, setInboxStateOff, inboxState } = useInboxState();

	const [num, setNum] = useState<number>();

	const newInbox = inboxMessageDetails.map((items) => (items.id === num ? { ...items, on: setInboxStateOn, off: setInboxStateOff, inboxState: inboxState, bgColor: "rgba(229, 236, 247, 0.6)" } : items));
	// const navigate = useNavigate();
	return (
		<InboxContainer>
			{/* Category Labels */}

			<InboxCategoryContainer />

			{/* Messages */}
			{newInbox.map((items: InboxMessagePropsCombine, index) => (
				<div
					key={items.id}
					onMouseMove={() => {
						setNum(index + 1);
					}}
					onMouseOver={items.on}
					onMouseLeave={items.off}>
					<InboxMessages items={items} />
				</div>
			))}
		</InboxContainer>
	);
};

export default Inbox;
