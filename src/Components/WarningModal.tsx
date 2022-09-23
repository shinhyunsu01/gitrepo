import React from "react";

interface WarningModalType {
	title: string;
}

const WarningModal = ({ title }: WarningModalType) => {
	return (
		<div className="fixed  z-20 w-60 h-60 m-auto mt-36 left-0 right-0  rounded-md bg-white font-bold border flex items-center justify-center">
			<div className="text-center  px-2 py-2">{title}</div>
		</div>
	);
};

export default WarningModal;
