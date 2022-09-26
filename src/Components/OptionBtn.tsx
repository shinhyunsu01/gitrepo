import React from "react";
import { useRecoilState } from "recoil";
import { SaveDataAtom } from "../atom/SaveDataAtom";
import { cls } from "../Libs/utils";
import { resultType } from "../Types/TotalType";

interface OptionBtnType {
	value: string;
	warningHandler: React.Dispatch<React.SetStateAction<boolean>>;
	currentData: resultType;
}

const OptionBtn = ({ value, currentData, warningHandler }: OptionBtnType) => {
	const [saveDataAtom, setSaveDataAtom] =
		useRecoilState<resultType[]>(SaveDataAtom);

	const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		const {
			currentTarget: { value },
		} = event;

		setSaveDataAtom((oldData) => {
			const data = oldData.findIndex(
				(element: resultType) =>
					element.user === currentData.user &&
					element.project === currentData.project
			);

			if (data === -1) {
				if (oldData.length >= 4) {
					warningHandler(true);
					return [...oldData];
				} else {
					return [...oldData, currentData];
				}
			} else {
				const result = oldData.filter(
					(element) =>
						!(
							element.user === currentData.user &&
							element.project === currentData.project
						)
				);
				return [...result];
			}
		});
	};

	return (
		<button
			value={value}
			onClick={onClick}
			className={cls(
				"ml-2 w-16 px-4 py-2  text-white rounded-md",
				saveDataAtom.findIndex(
					(element: any) =>
						element.user === currentData.user &&
						element.project === currentData.project
				) !== -1
					? "bg-red-400"
					: "bg-[#3d58c1]"
			)}
		>
			{saveDataAtom.findIndex(
				(element: any) =>
					element.user === currentData.user &&
					element.project === currentData.project
			) !== -1
				? "Del"
				: "Add"}
		</button>
	);
};

export default OptionBtn;
