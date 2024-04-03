import { LeftAsideContainer, MainContainer, MessageContainer, RightAsideContainer } from "./HomeStyles";
import { Aside, Messages, RightSideBar } from "../../containers";
import { useAsideState, useFormState } from "../../state-management";
import { ShowRIghtSideBtn } from "../../components";

const Home = () => {
	const { setFormStateOff } = useFormState();

	const { showRightSideState, showMenu, setShowMenuOnOver, setShowMenuOff } = useAsideState();

	return (
		<MainContainer onClick={setFormStateOff}>
			{showMenu && (
				<LeftAsideContainer onMouseLeave={setShowMenuOff}>
					<Aside />
				</LeftAsideContainer>
			)}

			{!showMenu && (
				<div className="" style={{ width: "7rem" }} onMouseOver={setShowMenuOnOver}>
					<Aside />
				</div>
			)}

			<MessageContainer>
				<Messages />
			</MessageContainer>
			<RightAsideContainer>
				<RightSideBar />
			</RightAsideContainer>

			{/* Icon to show the right side menu */}
			{!showRightSideState && <ShowRIghtSideBtn />}
		</MainContainer>
	);
};

export default Home;
