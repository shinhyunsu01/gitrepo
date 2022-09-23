import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { SaveDataAtom } from "../atom/SaveDataAtom";
import { cls } from "../Libs/utils";
import { resultType } from "../Types/TotalType";
import WarningModal from "./WarningModal";

interface TableType {
	titleXArr: string[];
	dataArr: resultType[];
	saveBtn: boolean;
}

const Table = ({ titleXArr, dataArr, saveBtn }: TableType) => {
	const [click, setClick] = useState<any>([]);
	const [warning, setWarning] = useState(false);
	const [saveDataAtom, setSaveDataAtom] =
		useRecoilState<resultType[]>(SaveDataAtom);

	const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		const {
			currentTarget: { value },
		} = event;
		setSaveDataAtom((oldData) => {
			const data = oldData.findIndex(
				(element: resultType) =>
					element.user === dataArr[+value].user &&
					element.project === dataArr[+value].project
			);
			if (data === -1) {
				if (oldData.length >= 4) {
					setWarning(true);
					return [...oldData];
				} else {
					return [...oldData, dataArr[+value]];
				}
			} else {
				const result = oldData.filter(
					(element) =>
						!(
							element.user === dataArr[+value].user &&
							element.project === dataArr[+value].project
						)
				);
				return [...result];
			}
		});
	};

	useEffect(() => {
		const setTimeoutId = setTimeout(() => {
			setWarning(false);
		}, 500);
		return () => clearTimeout(setTimeoutId);
	}, [warning]);

	return (
		<>
			{saveBtn && warning && <WarningModal title={"4개 초과 되었습니다"} />}
			<table className=" w-full h-full text-center  text-sm ">
				<thead className=" sticky top-0 z-10 h-14 bg-gray-100 ">
					<tr>
						{titleXArr.map((element, index) => (
							<th key={index}>{element}</th>
						))}
					</tr>
				</thead>

				{dataArr &&
					dataArr.map((item, index) => (
						<tbody key={index} className="h-14 border-b-2 hover:bg-gray-200">
							<tr>
								{Object.values(item).map((element, index) => (
									<td key={index}>{element}</td>
								))}
								{saveBtn && (
									<td>
										<button
											value={index}
											onClick={onClick}
											className={cls(
												"w-16 px-4 py-2  text-white rounded-md",
												saveDataAtom.findIndex(
													(element: any) =>
														element.user === dataArr[+index].user &&
														element.project === dataArr[+index].project
												) !== -1
													? "bg-red-400"
													: "bg-[#3d58c1]"
											)}
										>
											{saveDataAtom.findIndex(
												(element: any) =>
													element.user === dataArr[+index].user &&
													element.project === dataArr[+index].project
											) !== -1
												? "Del"
												: "Add"}
										</button>
									</td>
								)}
							</tr>
						</tbody>
					))}
			</table>
		</>
	);
};

export default Table;
