import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import useApiData, { API_URL } from "../Libs/useApiData";

const Repo = () => {
	const location = useLocation();
	const { data, isLoading } = useApiData(
		`${location.pathname + location.search}`
	);

	return (
		<>
			<Navbar />
		</>
	);
};

export default Repo;
