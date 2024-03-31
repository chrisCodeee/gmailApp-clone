import { InboxMessageContainer, InboxMessageWrapper } from "../InboxStyles";

import { InboxMessageBody, InboxSubject } from "../inboxComponents";
import { InboxSubjectProps } from "../inboxComponents/InboxSubject";
import { InboxMessageBodyProps } from "../inboxComponents/InboxMessageBody";

export type InboxMessagePropsCombine = InboxMessageBodyProps & InboxSubjectProps;

interface InboxMessageProps {
	items: InboxMessagePropsCombine;
}

const InboxMessages = ({ items }: InboxMessageProps) => {
	return (
		<InboxMessageContainer>
			<InboxMessageWrapper className="row">
				<InboxSubject subject={items.subject} inboxState={items.inboxState} />

				<InboxMessageBody items={items} />
			</InboxMessageWrapper>
		</InboxMessageContainer>
	);
};

export default InboxMessages;
