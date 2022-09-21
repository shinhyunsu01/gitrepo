import React from "react";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Index from "./Page/Index";

function App() {
	return (
		<div className="App w-full  min-h-screen ">
			<Router>
				<Routes>
					<Route path="/" element={<Index />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
