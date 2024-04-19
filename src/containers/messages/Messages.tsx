import { Outlet } from "react-router-dom";
import { MessageWrapper } from "./MessageStyles";
import UpperMessage from "./UpperMessage";
import { useNavBarState } from "../../state-management";

const Messages = () => {
	const { setSelectMessageTypeStateOff, setMarkAllMessageReadStateOff } = useNavBarState();
	return (
		<>
			<UpperMessage />
			<MessageWrapper
				onClick={() => {
					setSelectMessageTypeStateOff();
					setMarkAllMessageReadStateOff();
				}}>
				<Outlet />
			</MessageWrapper>
		</>
	);
};

export default Messages;
