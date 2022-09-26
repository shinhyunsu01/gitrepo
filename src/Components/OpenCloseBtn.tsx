import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CloseIcon, OpenIcon } from "../Libs/Icon";
import { cls } from "../Libs/utils";

interface OpenCloseBtnType {
	totalLen: number;
}

const OpenCloseBtn = ({ totalLen }: OpenCloseBtnType) => {
	const location = useLocation();
	const navigate = useNavigate();
	const urlState = location.search.indexOf("open") !== -1 ? "open" : "closed";

	const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		const {
			currentTarget: { value },
		} = event;
		const current = value === "open" ? "closed" : "open";
		if (location.search.indexOf(current) !== -1) {
			const find = location.search.split(current);
			find[0] += value;
			navigate(`${location.pathname}${find.join("")}`);
		}
	};

	return (
		<div className="flex p-4">
			<button
				value="open"
				onClick={onClick}
				className={cls(
					"hover:bg-gray-100 space-x-2 flex mx-1 px-3 py-1 text-center border-b-2 ",
					urlState === "open" ? "border-[#3d58c1]" : ""
				)}
			>
				<span>
					<OpenIcon />
				</span>
				<span>{totalLen}</span>
				<span>Open</span>
			</button>
			<button
				value="closed"
				onClick={onClick}
				className={cls(
					"hover:bg-gray-100 space-x-2 flex mx-1 px-3 py-1 text-center border-b-2 ",
					urlState === "closed" ? "border-[#3d58c1]" : ""
				)}
			>
				<span>
					<CloseIcon />
				</span>

				<span>Close</span>
			</button>
		</div>
	);
};

export default OpenCloseBtn;
