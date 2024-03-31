import { Unsubscribe } from ".";
import { InboxMessageBodyWrapper, InboxMessageBodyWrapperSubject, InboxMessageTime } from "../InboxStyles";

export type InboxMessageBodyProps = {
	heading: string;
	id?: number;
	message: string;
	time: string;
	inboxState?: boolean;
	on?: () => void;
	off?: () => void;
};

interface InboxMessageBodyParams {
	items: InboxMessageBodyProps;
}

const InboxMessageBody = ({ items }: InboxMessageBodyParams) => {
	// const { inboxState } = useInboxState();
	return (
		<>
			<InboxMessageBodyWrapper>
				<InboxMessageBodyWrapperSubject>
					{!items.inboxState && <h4>{items.heading} &nbsp;</h4>}
					{!items.inboxState && <h4 style={{ fontWeight: "400" }}>{items.message.length > 75 ? items.message.slice(0, 80) : items.message}...</h4>}
					{items.inboxState && <h4 style={{ fontWeight: "400" }}>{items.heading.concat(...items.message).slice(0, 97)}...</h4>}
				</InboxMessageBodyWrapperSubject>

				{items.inboxState && <Unsubscribe />}
				{!items.inboxState && <InboxMessageTime>{items.time}</InboxMessageTime>}
			</InboxMessageBodyWrapper>
		</>
	);
};

export default InboxMessageBody;
