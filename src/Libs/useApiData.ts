import { useEffect, useState } from "react";
import useSWR from "swr";

// `/repos/${owner}/${repo}/issues`,
// /search/repositories?q=${word}&page=1
const API_URL = "https://api.github.com";

export default function useApiData(url: string) {
	const [state, setState] = useState({
		data: {},
		isLoading: true,
	});

	const { data, error } = useSWR(`${API_URL}${url}`);

	useEffect(() => {
		if (!data && !error) {
			setState({ data: {}, isLoading: true });
		} else if (data && data.items) {
			setState({ data: data, isLoading: false });
		}
	}, [data, error]);

	return { data: state.data, isLoading: state.isLoading };
}
