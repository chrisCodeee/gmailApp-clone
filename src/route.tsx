import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, Home, Inbox, Promotion, Starred } from "./pages";
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
					{ path: "/starred", element: <Starred /> },
				],
			},
		],
	},
]);
export default route;
