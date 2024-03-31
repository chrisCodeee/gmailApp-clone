import { Unsubscribe } from ".";
import { useInboxState } from "../../../state-management";
import { InboxMessageBodyWrapper, InboxMessageBodyWrapperSubject, InboxMessageTime } from "../InboxStyles";

export type InboxMessageBodyProps = {
	heading: string;
	message: string;
	time: string;
	inboxState?: boolean;
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
					<h4>{items.heading} &nbsp;</h4>
					{!items.inboxState && <h4 style={{ fontWeight: "400" }}>&ndash; &nbsp;{items.message}</h4>}
					{items.inboxState && <h4 style={{ fontWeight: "400" }}>&ndash; &nbsp;We have your back with savings and rewards...</h4>}
				</InboxMessageBodyWrapperSubject>

				{items.inboxState && <Unsubscribe />}
				{!items.inboxState && <InboxMessageTime>7:15pm</InboxMessageTime>}
			</InboxMessageBodyWrapper>
		</>
	);
};

export default InboxMessageBody;
