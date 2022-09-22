import React from "react";
import { Link } from "react-router-dom";
import { Logo, SearchIcon } from "../Libs/Icon";
import SearchInput from "./SearchInput";

const Navbar = () => {
	return (
		<header className=" w-full fixed bg-gray-50 px-4 py-2 grid grid-cols-2 sm:grid-cols-3 ">
			<Link to="/" className="hidden sm:block">
				<Logo />
			</Link>

			<SearchInput />

			<div className="flex justify-end items-center">
				<Link to="/" className="px-4 py-2 bg-[#3d58c1] text-white rounded-md">
					Store
				</Link>
			</div>
		</header>
	);
};

export default Navbar;
