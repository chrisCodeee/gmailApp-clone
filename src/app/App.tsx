import { Outlet } from "react-router-dom";
import { AccountProfile, GoogleApps, MarkAllAsRead, NavBar, SearchMoreOptions, SelectMessageType, Support } from "../containers";
import { AppWrapper } from "./AppStyles";
import { useNavBarState } from "../state-management";

function App() {
	const { showMoreState, supportState, googleAppState, accountProfileState, selectMessageTypeState, markAllMessageReadState } = useNavBarState();
	return (
		<AppWrapper>
			<NavBar />

			<Outlet />

			{googleAppState && <GoogleApps />}
			{showMoreState && <SearchMoreOptions />}
			{supportState && <Support />}
			{accountProfileState && <AccountProfile />}
			{selectMessageTypeState && <SelectMessageType />}
			{markAllMessageReadState && <MarkAllAsRead />}
		</AppWrapper>
	);
}

export default App;
