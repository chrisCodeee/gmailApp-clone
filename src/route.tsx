import { createBrowserRouter } from "react-router-dom";
import { Draft, ErrorPage, Home, Important, Inbox, ManageLabel, Promotion, Scheduled, Sent, Snoozed, Spam, Starred, Trash } from "./pages";
import { App } from "./app";
import Chats from "./pages/chats/Chats";

const route = createBrowserRouter([
	{
		path: "",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "",
				element: <Home />,
				children: [
					{ path: "", element: <Inbox /> },
					{ path: "/promotion", element: <Promotion /> },
					{ path: "/starred", element: <Starred /> },
					{ path: "/sent", element: <Sent /> },
					{ path: "/trash", element: <Trash /> },
					{ path: "/snoozed", element: <Snoozed /> },
					{ path: "/draft", element: <Draft /> },
					{ path: "/important", element: <Important /> },
					{ path: "/chats", element: <Chats /> },
					{ path: "/scheduled", element: <Scheduled /> },
					{ path: "/spam", element: <Spam /> },
					{ path: "/settings/labels", element: <ManageLabel /> },
				],
			},
		],
	},
]);
export default route;
