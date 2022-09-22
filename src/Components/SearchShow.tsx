import React, { useEffect, useState } from "react";
import useSWR from "swr";
import useApiData from "../Libs/useApiData";

interface SearchShowType {
	word: string;
}

const SearchShow = ({ word }: SearchShowType) => {
	const [result, setResult] = useState();
	const { data, isLoading } = useApiData(
		`/search/repositories?q=${word}&page=1`
	);

	return <div></div>;
};

export default SearchShow;
