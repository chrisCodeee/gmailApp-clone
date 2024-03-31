import { useEffect, useState } from "react";
import { useInboxState } from "../../state-management";
import { InboxContainer } from "./InboxStyles";
import { InboxCategoryContainer, InboxMessages } from "./inboxContainers";
import { InboxMessagePropsCombine } from "./inboxContainers/InboxMessages";

const Inbox = () => {
	const { setInboxStateOn, setInboxStateOff, inboxState } = useInboxState();

	const inboxMessageDetails = [
		{ id: 1, subject: "Amex Offers from Am.", heading: "Christian, don't miss out! Redeem your offers.", message: "We have your back with savings and rewards. Manage Email Preferences No Ima...", time: "7:15pm" },
		{ id: 2, subject: "Amex Offers from Am.", heading: "Christian, don't miss out! Redeem your offers.", message: "We have your back with savings and rewards. Manage Email Preferences No Ima...", time: "7:15pm" },
		{ id: 3, subject: "Amex Offers from Am.", heading: "Christian, don't miss out! Redeem your offers.", message: "We have your back with savings and rewards. Manage Email Preferences No Ima...", time: "7:15pm" },
	];
	// let newInbox;

	const [num, setNum] = useState<number>();

	// const [arr, setArr] = useState<number>(num);

	// const x = () => {
	const newInbox = inboxMessageDetails.map((items) => (items.id === num ? { ...items, on: setInboxStateOn, off: setInboxStateOff, inboxState: inboxState } : items));
	console.log(newInbox);

	// useEffect(() => {
	// 	x(3);
	// }, [num]);

	const x = (number: number) => {
		// setArr(newInbox);
		setNum(number);
		// const inboxMessageDetail = inboxMessageDetails.map((items) => (items.id === number ? setInboxStateOn : setInboxStateOff));
		// setArr(inboxMessageDetail);
	};

	// x(index + 1);

	// setArr([newInbox]);
	// };

	return (
		<InboxContainer>
			{/* Category Labels */}
			<div>
				<InboxCategoryContainer />
			</div>

			{/* Messages */}
			{newInbox.map((items, index) => (
				<div
					key={items.id}
					onMouseOver={() => {
						x(index + 1);
						items.on();
					}}
					onMouseLeave={items.off}>
					<InboxMessages items={items} />
				</div>
			))}

			{num}
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
