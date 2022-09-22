import React from "react";
import { LoadingIcon } from "../Libs/Icon";

const Loading = () => {
	return (
		<div className="flex items-center h-full justify-center w-full font-bold ">
			<div>
				<LoadingIcon />
				<br />
				<div className="text-center">Loading...</div>
			</div>
		</div>
	);
};

export default Loading;
