import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { SaveDataAtom } from "../atom/SaveDataAtom";
import Loading from "../Components/Loading";
import Navbar from "../Components/Navbar";
import Nothing from "../Components/Nothing";
import OpenCloseBtn from "../Components/OpenCloseBtn";
import Pagination from "../Components/Pagination";
import Table from "../Components/Table";
import useApiData from "../Libs/useApiData";
import { resultIssuesType, resultType } from "../Types/TotalType";

const Repo = () => {
	const [saveDataAtom, setSaveDataAtom] =
		useRecoilState<resultType[]>(SaveDataAtom);
	const location = useLocation();
	const urlState = location.search.indexOf("closed") !== -1 ? "closed" : "open";
	const { data, isLoading } = useApiData(
		`${location.pathname + location.search}`
	);
	const urlTitle = location.pathname.split("/");
	const [totalIssue, setTotalIssue] = useState<number>(0);
	const [issueData, setIssueData] = useState<resultIssuesType>();

	const filterData = useCallback(() => {
		if (!isLoading && data) {
			const dataAtom = saveDataAtom.filter(
				(element) =>
					element.user === urlTitle[2] && element.project === urlTitle[3]
			);
			console.log("dataAtom", dataAtom[0]);
			setIssueData({
				totalLen: dataAtom[0].issuecount,
				items: data.items as any,
			});
		}
	}, [data, isLoading]);

	useEffect(() => {
		filterData();
	}, [filterData]);

	const titleXArr = [urlState === "open" ? "Issues" : "Closed"];

	return (
		<>
			<Navbar />
			<div className="pt-16">
				<OpenCloseBtn totalLen={issueData?.totalLen || 0} />

				<div className="mt-4 w-full h-[calc(100vh-250px)] overflow-y-auto px-6">
					{!isLoading && issueData && issueData.items.length >= 1 ? (
						<Table
							titleXArr={titleXArr}
							dataArr={issueData?.items}
							optionSaveBtn={false}
						></Table>
					) : issueData && issueData.items.length === 0 ? (
						<Nothing title="검색 결과 가 없습니다" />
					) : (
						<Loading />
					)}
				</div>
				<Pagination len={issueData?.totalLen || 1} />
			</div>
		</>
	);
};

export default Repo;
