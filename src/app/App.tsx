import { Outlet } from "react-router-dom";
import * as Container from "../containers";
import { AppWrapper } from "./AppStyles";
import { useAsideState, useInboxState, useNavBarState } from "../state-management";
import { ComposeMessageMinimized } from "../containers/compose/component";
import { useCompose } from "../hooks";

function App() {
	const { showMoreState, supportState, googleAppState, accountProfileState } = useNavBarState();

	const { createLabelState, composeMessageState } = useAsideState();

	const { useComposeMessage } = useCompose();

	const { selectMessageTypeState, markAllMessageReadState, selectInputToolState } = useInboxState();
	return (
		<AppWrapper>
			<Container.NavBar />
			<Outlet />
			{createLabelState && <Container.CreateLabelModal />}
			{googleAppState && <Container.GoogleApps />}
			{showMoreState && <Container.SearchMoreOptions />}
			{supportState && <Container.Support />}
			{accountProfileState && <Container.AccountProfile />}
			{selectMessageTypeState && <Container.SelectMessageType />}
			{markAllMessageReadState && <Container.MarkAllAsRead />}
			{selectInputToolState && <Container.LanguageInputTool />}
			{composeMessageState && <Container.Compose />}
			{useComposeMessage.composeMessageMinimizeState && <ComposeMessageMinimized />}
			{useComposeMessage.insertLinkState && <Container.InsertLink />}
			{useComposeMessage.alertState && <Container.Alert />}
		</AppWrapper>
	);
}

export default App;
