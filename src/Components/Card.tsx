import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { SaveDataAtom } from "../atom/SaveDataAtom";
import { ForkIcon, StarIcon, WatchIcon } from "../Libs/Icon";
import { saveLocal } from "../Libs/localStorageUtil";
import { threeDigit } from "../Libs/utils";
import { resultType } from "../Types/TotalType";

interface CardType {
	item: resultType;
}

const Card = ({ item }: CardType) => {
	const [saveDataAtom, setSaveDataAtom] =
		useRecoilState<resultType[]>(SaveDataAtom);

	const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		const {
			currentTarget: { value },
		} = event;
		const arr = value.split(" ");

		setSaveDataAtom((oldData) => {
			const result = oldData.filter(
				(element) => !(element.user === arr[0] && element.project === arr[1])
			);
			saveLocal("gitRepo", result);
			return [...result];
		});
	};

	return (
		<div className="relative rounded-md border w-52 h-72 m-4 p-4">
			<Link
				to={`/repos/${item.user}/${item.project}/issues?&state=open&page=1`}
			>
				<div className="flex  items-center justify-center font-bold pb-2 border-b-2">
					{item.userAvatar ? (
						<img className="rounded-full w-12 mr-2" src={item.userAvatar} />
					) : (
						<div className="rounded-full bg-gray-500 w-12"> </div>
					)}
					<div className="w-full">{item.user}</div>
				</div>
				<div className="font-bold mt-2">{`${item.user} / ${item.project}`}</div>
				<br />

				<div className="flex items-center justify-center">
					<StarIcon />
					&nbsp;
					<div className="text-gray-500">{threeDigit(item.stars)}</div>
				</div>
				<div className="flex items-center justify-center">
					<WatchIcon />
					&nbsp;
					<div className="text-gray-500">{threeDigit(item.watching)}</div>
				</div>
				<div className="flex items-center justify-center">
					<ForkIcon />
					&nbsp;
					<div className="text-gray-500">{threeDigit(item.forks)}</div>
				</div>
				<br />
			</Link>
			<button
				onClick={onClick}
				value={item.user + " " + item.project}
				className="absolute left-0 right-0 bottom-0 mx-4 mb-4 py-2 bg-red-500 text-white rounded-md  "
			>
				Del
			</button>
		</div>
	);
};

export default Card;
