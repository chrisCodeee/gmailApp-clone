import { useState } from "react";
import { useInboxState } from "../../state-management";
import { InboxContainer } from "./InboxStyles";
import { InboxCategoryContainer, InboxMessages } from "./inboxContainers";
import { InboxMessagePropsCombine } from "./inboxContainers/InboxMessages";
import { inboxMessageDetails } from "./useInboxParams";

const Inbox = () => {
	const { setInboxStateOn, setInboxStateOff, inboxState } = useInboxState();

	const [num, setNum] = useState<number>();

	const newInbox = inboxMessageDetails.map((items) => (items.id === num ? { ...items, on: setInboxStateOn, off: setInboxStateOff, inboxState: inboxState } : items));

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
