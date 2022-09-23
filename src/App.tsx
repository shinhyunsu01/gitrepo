import React from "react";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { SWRConfig, useSWRConfig } from "swr";

import Index from "./Page/Index";
import Search from "./Page/Search";

function App() {
	return (
		<div className="App w-full  min-h-screen ">
			<SWRConfig>
				<Router>
					<Routes>
						<Route path="/" element={<Index />} />
						<Route path="/search/*" element={<Search />} />
					</Routes>
				</Router>
			</SWRConfig>
		</div>
	);
}

export default App;
