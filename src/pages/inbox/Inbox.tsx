import { InboxContainer } from "./InboxStyles";
import { InboxCategoryContainer, InboxMessages } from "./inboxContainers";

const Inbox = () => {
	const inboxMessageDetails = [
		{ id: 1, subject: "Amex Offers from Am.", heading: "Christian, don't miss out! Redeem your offers.", message: "We have your back with savings and rewards. Manage Email Preferences No Ima...", time: "7:15pm" },
		{ id: 2, subject: "Amex Offers from Am.", heading: "Christian, don't miss out! Redeem your offers.", message: "We have your back with savings and rewards. Manage Email Preferences No Ima...", time: "7:15pm" },
		{ id: 3, subject: "Amex Offers from Am.", heading: "Christian, don't miss out! Redeem your offers.", message: "We have your back with savings and rewards. Manage Email Preferences No Ima...", time: "7:15pm" },
	];
	return (
		<InboxContainer>
			{/* Category Labels */}
			<InboxCategoryContainer />

			{/* Messages */}
			{inboxMessageDetails.map((items) => (
				<InboxMessages key={items.id} items={items} />
			))}
			{/* <InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages />
			<InboxMessages /> */}
		</InboxContainer>
	);
};

export default Inbox;
