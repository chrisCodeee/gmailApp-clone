import { InboxMessageContainer, InboxMessageWrapper } from "../InboxStyles";
import { useInboxState } from "../../../state-management";
import { InboxMessageBody, InboxSubject } from "../inboxComponents";
import { InboxSubjectProps } from "../inboxComponents/InboxSubject";
import { InboxMessageBodyProps } from "../inboxComponents/InboxMessageBody";

// type InboxMessagePropsCombine = InboxMessageBodyProps & InboxSubjectProps;

interface InboxMessageProps {
	items: InboxMessageBodyProps & InboxSubjectProps;
}

const InboxMessages = ({ items }: InboxMessageProps) => {
	const { setInboxStateOn, setInboxStateOff } = useInboxState();
	return (
		<InboxMessageContainer onMouseEnter={setInboxStateOn} onMouseLeave={setInboxStateOff}>
			<InboxMessageWrapper className="row">
				<InboxSubject subject={items.subject} />

				<InboxMessageBody items={items} />
			</InboxMessageWrapper>
		</InboxMessageContainer>
	);
};

export default InboxMessages;
