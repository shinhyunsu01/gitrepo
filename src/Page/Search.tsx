import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Loading from "../Components/Loading";
import Navbar from "../Components/Navbar";
import useApiData from "../Libs/useApiData";

const Search = () => {
	const location = useLocation();
	const [searchResult, setSearchResult] = useState<any>();

	const { data, isLoading } = useApiData(
		`${location.pathname + location.search}`
	);

	useEffect(() => {
		if (!isLoading && data) {
			setSearchResult(data);
			console.log(data);
		}
	});

	return (
		<>
			<Navbar />
			<div className="pt-12">
				<div className="mt-10  h-[calc(100vh-200px)] overflow-y-auto px-4">
					{searchResult && !isLoading && searchResult.items.length >= 1 ? (
						<table className="w-full h-full text-center sticky text-sm ">
							<thead className=" sticky top-0 z-10 h-14 bg-gray-100 ">
								<tr>
									<th>User</th>
									<th>Project</th>
									<th>Watching</th>
									<th>Forks</th>
									<th>Stars</th>
									<th>IssueCount</th>
									<th></th>
								</tr>
							</thead>
							{searchResult.items.map((item: any, i: number) => (
								<tbody key={i} className="h-14 border-b-2 hover:bg-gray-200">
									<tr>
										<td>{item.owner.login}</td>
										<td>{item.name}</td>
										<td>{item.watchers_count}</td>
										<td>{item.watchers_count}</td>
										<td>{item.forks_count}</td>
										<td>{item.open_issues_count}</td>
										<td>
											<button className="px-4 py-2 bg-[#3d58c1] text-white rounded-md">
												Add
											</button>
										</td>
									</tr>
								</tbody>
							))}
						</table>
					) : searchResult.items.length === 0 ? (
						<div className="w-full h-full flex items-center justify-center font-bold bg-gray-100 rounded-md">
							<div> 검색 결과 가 없습니다</div>
						</div>
					) : (
						<Loading />
					)}
				</div>
			</div>
		</>
	);
};

export default Search;
