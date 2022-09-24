import React from "react";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { SWRConfig, useSWRConfig } from "swr";

import Index from "./Page/Index";
import Repo from "./Page/Repo";
import Search from "./Page/Search";

function App() {
	return (
		<div className="App w-full  min-h-screen ">
			<SWRConfig
				value={{
					fetcher: (url: string) =>
						fetch(url).then((response) => response.json()),
				}}
			>
				<RecoilRoot>
					<Router>
						<Routes>
							<Route path="/" element={<Index />} />
							<Route path="/search/*" element={<Search />} />
							<Route path="/repos/*" element={<Repo />} />
						</Routes>
					</Router>
				</RecoilRoot>
			</SWRConfig>
		</div>
	);
}

export default App;
