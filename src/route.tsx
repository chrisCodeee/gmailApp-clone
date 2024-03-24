import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, Home, Inbox, Promotion } from "./pages";
import { App } from "./app";

const route = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "",
				element: <Home />,
				children: [
					{ path: "/inbox", element: <Inbox /> },
					{ path: "/promotion", element: <Promotion /> },
				],
			},
		],
	},
]);
export default route;
