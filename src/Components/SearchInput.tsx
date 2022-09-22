import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { SearchIcon } from "../Libs/Icon";
import { useDebounce } from "../Libs/useDebounce";
import SearchShow from "./SearchShow";

const SearchInput = () => {
	const [inputWord, setInputWord] = useState("");
	const [word, setWord] = useState("");
	const navigate = useNavigate();

	const onSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		navigate(`/search/repositories?q=${inputWord}&page=1`);
	};
	return (
		<form
			onSubmit={onSubmit}
			className=" flex justify-center relative w-full items-center rounded-md "
		>
			<div className="absolute left-0 py-1 ml-2">
				<SearchIcon />
			</div>
			<input
				className="w-full rounded-md  border appearance-none pl-8 py-2 focus:ring-2 focus:ring-offset-2 focus:outline-none  focus:ring-[#3d58c1] "
				placeholder="Search Repository"
				onChange={(event) => setInputWord(event.currentTarget.value)}
			/>
		</form>
	);
};

export default SearchInput;
