import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useSWRConfig } from "swr";
import { LeftArrowIcon, RightArrowIcon } from "../Libs/Icon";
import { cls } from "../Libs/utils";

interface PaginationType {
	len: number;
}

const Pagination = ({ len }: PaginationType) => {
	const pageLen = Math.ceil(len / 30);
	const [pageNum, setpageNum] = useState(0);
	const location = useLocation();
	const navigate = useNavigate();
	const currentIndex = location.search.split("page=");

	const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		const {
			currentTarget: { value },
		} = event;

		if (value === "left") {
			if (pageNum > 0) {
				setpageNum(pageNum - 5);
			} else {
				setpageNum(0);
			}
		} else if (value === "right") {
			if (pageNum <= pageLen - 5) {
				setpageNum(pageNum + 5);
			}
		} else {
			currentIndex[1] = value;

			navigate(location.pathname + currentIndex[0] + "page=" + currentIndex[1]);
		}
	};

	return (
		<div className="mt-10 w-full flex items-center justify-center">
			<div className="w-[300px] px-2 justify-center items-center flex">
				<button
					onClick={onClick}
					value={"left"}
					className="flex items-center justify-center"
				>
					<LeftArrowIcon />
				</button>

				{[
					...Array(
						pageLen >= 5
							? pageLen - pageNum <= 5
								? pageLen - pageNum
								: 5
							: pageLen - pageNum
					),
				].map((_, index) => (
					<button
						key={index}
						value={index + 1 + pageNum}
						onClick={onClick}
						className={cls(
							"mx-1 px-3 py-1 text-center   border rounded-md",
							index + 1 + pageNum === +currentIndex[1]
								? "bg-[#3d58c1] text-white"
								: "bg-white text-black"
						)}
					>
						{index + 1 + pageNum}
					</button>
				))}

				<button
					onClick={onClick}
					value={"right"}
					className="flex items-center justify-center"
				>
					<RightArrowIcon />
				</button>
			</div>
		</div>
	);
};

export default Pagination;
