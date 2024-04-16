import { Outlet } from "react-router-dom";
import { AccountProfile, GoogleApps, NavBar, SearchMoreOptions, Support } from "../containers";
import { AppWrapper } from "./AppStyles";
import { useNavBarState } from "../state-management";

function App() {
	const { showMoreState, supportState, googleAppState } = useNavBarState();
	return (
		<AppWrapper>
			<NavBar />

			{/* <Outlet /> */}
			<AccountProfile />
			{googleAppState && <GoogleApps />}
			{showMoreState && <SearchMoreOptions />}
			{supportState && <Support />}
		</AppWrapper>
	);
}

export default App;
