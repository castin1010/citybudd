import React from "react";
import { useUser } from "./context/user-context";
import { BrowserRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faHome,
	faBell,
	faInbox,
	faUsers,
	faCog,
	faAddressBook,
	faUniversity,
	faAngleRight,
	faPowerOff
} from "@fortawesome/free-solid-svg-icons";

const loadAuthenticatedApp = () => import("./private");
const Private = React.lazy(loadAuthenticatedApp);
const Public = React.lazy(() => import("./public"));

library.add(
	faHome,
	faBell,
	faInbox,
	faUsers,
	faCog,
	faAddressBook,
	faUniversity,
	faAngleRight,
	faPowerOff
);

function App() {
	const user = useUser();
	// Preload the private/authenticated side while the user fills out the login form
	React.useEffect(() => {
		loadAuthenticatedApp();
	}, []);
	return (
		<React.Suspense fallback={<div></div>}>
			<BrowserRouter>
				{user ? <Private /> : <Public />}
			</BrowserRouter>
		</React.Suspense>
	);
}

export default App;
