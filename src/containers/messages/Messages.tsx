import { Outlet } from "react-router-dom";
import { MessageWrapper } from "./MessageStyles";
import UpperMessage from "./UpperMessage";

const Messages = () => {
	return (
		<>
			<UpperMessage />
			<MessageWrapper>
				<Outlet />
			</MessageWrapper>
		</>
	);
};

export default Messages;
