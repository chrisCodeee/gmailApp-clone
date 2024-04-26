import { Outlet } from "react-router-dom";
import { AccountProfile, Compose, CreateLabelModal, GoogleApps, LanguageInputTool, MarkAllAsRead, NavBar, SearchMoreOptions, SelectMessageType, Support } from "../containers";
import { AppWrapper } from "./AppStyles";
import { useAsideState, useComposeMessageState, useInboxState, useNavBarState } from "../state-management";
import { ComposeMessageMinimized } from "../containers/compose/component";

function App() {
	const { showMoreState, supportState, googleAppState, accountProfileState } = useNavBarState();

	const { createLabelState, composeMessageState } = useAsideState();

	const { composeMessageMinimizeState } = useComposeMessageState();

	const { selectMessageTypeState, markAllMessageReadState, selectInputToolState } = useInboxState();
	return (
		<AppWrapper>
			<NavBar />

			<Outlet />

			{createLabelState && <CreateLabelModal />}

			{googleAppState && <GoogleApps />}
			{showMoreState && <SearchMoreOptions />}
			{supportState && <Support />}
			{accountProfileState && <AccountProfile />}
			{selectMessageTypeState && <SelectMessageType />}
			{markAllMessageReadState && <MarkAllAsRead />}
			{selectInputToolState && <LanguageInputTool />}
			{composeMessageState && <Compose />}

			{composeMessageMinimizeState && <ComposeMessageMinimized />}
		</AppWrapper>
	);
}

export default App;
