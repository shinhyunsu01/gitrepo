import React, { useEffect, useState } from "react";
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

	const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		const {
			currentTarget: { value },
		} = event;
		let tmp;
		const result = click.findIndex(
			(element: any) =>
				element.user === dataArr[+value].user &&
				element.project === dataArr[+value].project
		);

		if (result === -1) {
			if (click.length < 4)
				tmp = click.concat({
					index: value,
					user: dataArr[+value].user,
					project: dataArr[+value].project,
				});
			else setWarning(true);
		} else {
			tmp = click.filter((_: any, index: number) => index !== result);
		}
		if (tmp) setClick(tmp);
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
					dataArr.map((item: any, i: number) => (
						<tbody key={i} className="h-14 border-b-2 hover:bg-gray-200">
							<tr>
								{Object.values(item).map((element: any, index: number) => (
									<td key={index}>{element}</td>
								))}
								{saveBtn && (
									<td>
										<button
											value={i}
											onClick={onClick}
											className={cls(
												"w-16 px-4 py-2  text-white rounded-md",
												click.findIndex(
													(element: any) => i === +element.index
												) !== -1
													? "bg-red-400"
													: "bg-[#3d58c1]"
											)}
										>
											{click.findIndex(
												(element: any) => i === +element.index
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
