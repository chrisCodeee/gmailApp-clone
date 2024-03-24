import { Outlet } from "react-router-dom";
import { NavBar } from "../containers";
import { AppWrapper } from "./AppStyles";

function App() {
	return (
		<AppWrapper>
			<NavBar />
			<Outlet />
		</AppWrapper>
	);
}

export default App;
