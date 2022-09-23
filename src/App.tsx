import React from "react";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { SWRConfig, useSWRConfig } from "swr";

import Index from "./Page/Index";
import Search from "./Page/Search";

function App() {
	return (
		<div className="App w-full  min-h-screen ">
			<SWRConfig>
				<RecoilRoot>
					<Router>
						<Routes>
							<Route path="/" element={<Index />} />
							<Route path="/search/*" element={<Search />} />
						</Routes>
					</Router>
				</RecoilRoot>
			</SWRConfig>
		</div>
	);
}

export default App;
