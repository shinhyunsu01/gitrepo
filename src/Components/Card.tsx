import React from "react";
import { Link } from "react-router-dom";
import { ForkIcon, StarIcon, WatchIcon } from "../Libs/Icon";
import { threeDigit } from "../Libs/utils";
import { resultType } from "../Types/TotalType";

interface CardType {
	item: resultType;
}

const Card = ({ item }: CardType) => {
	return (
		<Link
			to={`/repos/${item.user}/${item.project}/issues?&state=open&page=1`}
			className="rounded-md border w-44 h-56 m-4 p-4"
		>
			<div className="flex items-center justify-center font-bold mb-2 border-b-2">
				{item.userAvatar ? (
					<img className="rounded-full w-12 mr-2" src={item.userAvatar} />
				) : (
					<div className="rounded-full bg-gray-500 w-12"> </div>
				)}
				<div>{item.user}</div>
			</div>
			<div className="font-bold ">{`${item.user} / ${item.project}`}</div>
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
		</Link>
	);
};

export default Card;
