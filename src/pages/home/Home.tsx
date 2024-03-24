import { LeftAsideContainer, MainContainer, MessageContainer, RightAsideContainer } from "./HomeStyles";
import { Aside, Messages, RightSideBar } from "../../containers";
import { useFormState } from "../../state-management";

const Home = () => {
	const { setFormStateOff } = useFormState();
	return (
		<MainContainer onClick={setFormStateOff}>
			<LeftAsideContainer>
				<Aside />
			</LeftAsideContainer>
			<MessageContainer>
				<Messages />
			</MessageContainer>
			<RightAsideContainer>
				<RightSideBar />
			</RightAsideContainer>
		</MainContainer>
	);
};

export default Home;
