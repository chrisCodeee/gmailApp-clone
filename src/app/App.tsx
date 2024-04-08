import { Outlet } from "react-router-dom";
import { NavBar, SearchMoreOptions, Support } from "../containers";
import { AppWrapper } from "./AppStyles";
import { useNavBarState } from "../state-management";

function App() {
	const { showMoreState, supportState } = useNavBarState();
	return (
		<AppWrapper>
			<NavBar />

			<Outlet />

			{showMoreState && <SearchMoreOptions />}
			{supportState && <Support />}
		</AppWrapper>
	);
}

export default App;
