import { Outlet } from "react-router-dom";
import { MessageWrapper } from "./MessageStyles";

const Messages = () => {
	return (
		<>
			<div className="">Upper</div>

			<MessageWrapper>
				<Outlet />
			</MessageWrapper>
		</>
	);
};

export default Messages;
