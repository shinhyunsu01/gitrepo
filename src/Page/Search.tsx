import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Loading from "../Components/Loading";
import Navbar from "../Components/Navbar";
import Nothing from "../Components/Nothing";
import Pagination from "../Components/Pagination";
import Table from "../Components/Table";
import useApiData from "../Libs/useApiData";
import { threeDigit } from "../Libs/utils";
import { resultTotalType } from "../Types/TotalType";

const Search = () => {
	const location = useLocation();
	const [searchResult, setSearchResult] = useState<resultTotalType>();
	const { data, isLoading } = useApiData(
		`${location.pathname + location.search}`
	);

	useEffect(() => {
		if (!isLoading && data) {
			setSearchResult(data);
		}
	});
	const titleXArr = [
		"User",
		"Project",
		"Watching",
		"Forks",
		"IssueCount",
		"Stars",
		"",
	];
	return (
		<>
			<Navbar />
			<div className="pt-16">
				<div className="pl-4 mt-6 font-bold text-xl">
					총 {threeDigit(searchResult?.totalLen || 0)} 개
				</div>
				<div className="pl-4 mt-2 text-gray-500">
					# 최대 4개 등록 할수 있습니다
				</div>
				<div className="mt-4 w-full h-[calc(100vh-250px)] overflow-y-auto px-6">
					{!isLoading && searchResult && searchResult.items.length >= 1 ? (
						<Table
							titleXArr={titleXArr}
							dataArr={searchResult.items}
							saveBtn={true}
						></Table>
					) : searchResult && searchResult.items.length === 0 ? (
						<Nothing title="검색 결과 가 없습니다" />
					) : (
						<Loading />
					)}
				</div>
				{searchResult && (
					<Pagination url={"search"} len={searchResult?.totalLen} />
				)}
			</div>
		</>
	);
};

export default Search;
