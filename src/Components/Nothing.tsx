import React from "react";

interface NothingType {
	title: string;
}
const Nothing = ({ title }: NothingType) => {
	return (
		<div className="w-full h-full flex items-center justify-center font-bold bg-gray-100 rounded-md">
			<div> {title}</div>
		</div>
	);
};

export default Nothing;
