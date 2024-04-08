import { LeftAsideContainer, MainContainer, MessageContainer, RightAsideContainer } from "./HomeStyles";
import { Aside, Messages, RightSideBar, Settings } from "../../containers";
import { useAsideState, useFormState } from "../../state-management";
import { ShowRIghtSideBtn } from "../../components";
import useNavBarState from "../../state-management/useNavBarState";

const Home = () => {
	const { setFormStateOff } = useFormState();

	const { showRightSideState, showMenu, setShowMenuOnOver } = useAsideState();
	const { setShowMoreStateOff, setSupportStateOff, settingState } = useNavBarState();

	return (
		<MainContainer
			onClick={() => {
				setFormStateOff();
				setShowMoreStateOff();
				setSupportStateOff();
			}}>
			{showMenu && (
				<LeftAsideContainer>
					<Aside />
				</LeftAsideContainer>
			)}

			{!showMenu && (
				<div className="menulist" style={{ width: "7rem" }} onMouseOver={setShowMenuOnOver}>
					<Aside />
				</div>
			)}

			<MessageContainer>
				<Messages />
			</MessageContainer>

			{settingState && (
				<div className="ms-4" style={{ width: "19%", backgroundColor: "#fff", borderRadius: "20px" }}>
					<Settings />
				</div>
			)}

			<RightAsideContainer>
				<RightSideBar />
			</RightAsideContainer>

			{/* Icon to show the right side menu */}
			{!showRightSideState && <ShowRIghtSideBtn />}
		</MainContainer>
	);
};

export default Home;
