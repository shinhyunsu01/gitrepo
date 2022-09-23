import { useEffect, useState } from "react";
import useSWR from "swr";
import { resultTotalType } from "../Types/TotalType";

// `/repos/${owner}/${repo}/issues`,
// /search/repositories?q=${word}&page=1
const API_URL = "https://api.github.com";

interface useApiDataType {
	data: resultTotalType;
	isLoading: boolean;
}

export default function useApiData(url: string) {
	const [state, setState] = useState<useApiDataType>({
		data: {
			totalLen: 0,
			items: [],
		},
		isLoading: true,
	});

	const { data, error } = useSWR(`${API_URL}${url}`);

	useEffect(() => {
		if (!data && !error) {
			setState({
				data: {
					totalLen: 0,
					items: [],
				},
				isLoading: true,
			});
		} else if (data && data.items) {
			let objMake;
			if (url.includes("search")) {
				objMake = data.items.map((element: any) => {
					let ele: any = {};

					ele.user = element.owner.login;
					ele.project = element.name;
					ele.watching = element.watchers_count;
					ele.forks = element.forks_count;
					ele.issuecount = element.open_issues_count;
					ele.stars = element.stargazers_count;

					return ele;
				});
			}
			setState({
				data: { totalLen: data.total_count, items: objMake },
				isLoading: false,
			});
		}
	}, [data, error]);

	return { data: state.data, isLoading: state.isLoading };
}
