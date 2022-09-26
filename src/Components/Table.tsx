import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { SaveDataAtom } from "../atom/SaveDataAtom";
import { CloseIcon, OpenIcon } from "../Libs/Icon";
import { saveLocal } from "../Libs/localStorageUtil";
import { agoTime, cls } from "../Libs/utils";
import { resultType } from "../Types/TotalType";
import OptionBtn from "./OptionBtn";
import WarningModal from "./WarningModal";

interface TableType {
	titleXArr: string[];
	dataArr: any[];
	optionSaveBtn: boolean;
}

const Table = ({ titleXArr, dataArr, optionSaveBtn }: TableType) => {
	const location = useLocation();
	const [warning, setWarning] = useState(false);
	const urlState = location.search.indexOf("open") !== -1 ? "open" : "closed";
	const [saveDataAtom, setSaveDataAtom] =
		useRecoilState<resultType[]>(SaveDataAtom);

	useEffect(() => {
		saveLocal("gitRepo", saveDataAtom);
	}, [saveDataAtom]);

	useEffect(() => {
		const setTimeoutId = setTimeout(() => {
			setWarning(false);
		}, 500);
		return () => clearTimeout(setTimeoutId);
	}, [warning]);

	return (
		<>
			{optionSaveBtn && warning && (
				<WarningModal title={"4개 초과 되었습니다"} />
			)}
			<table className=" w-full  text-sm ">
				<thead
					className={cls(
						"sticky top-0 z-10 h-14 bg-gray-100  border-collapse md:text-lg",
						titleXArr.length >= 4 ? "text-center" : "text-left"
					)}
				>
					<tr className="">
						{titleXArr.map((element, index) => (
							<th className="pl-4" key={index}>
								{element}
							</th>
						))}
					</tr>
				</thead>

				{dataArr &&
					dataArr.map((item, index) => (
						<tbody
							key={index}
							className="h-16 border-b-2 hover:bg-gray-200 text-center"
						>
							<tr>
								{optionSaveBtn &&
									[
										item.user,
										item.project,
										item.watching,
										item.forks,
										item.issuecount,
										item.stars,
									].map((element: any, index) => (
										<td key={index}>{element}</td>
									))}

								<td>
									{optionSaveBtn && (
										<OptionBtn
											warningHandler={setWarning}
											currentData={dataArr[+index]}
											value={
												dataArr[+index].user + "/" + dataArr[+index].project
											}
										/>
									)}

									{!optionSaveBtn && (
										<a target="_blank" href={item.url}>
											<div className="flex ">
												{urlState === "open" ? (
													<OpenIcon addClassName="text-[#3d58c1] mr-4" />
												) : (
													<CloseIcon addClassName="text-green-500 mr-4" />
												)}
												<div className="font-bold">{item.title}</div>
											</div>

											<div className="text-gray-500 text-left">
												{agoTime(item.updatetime)}
											</div>
										</a>
									)}
								</td>
							</tr>
						</tbody>
					))}
			</table>
		</>
	);
};

export default Table;
