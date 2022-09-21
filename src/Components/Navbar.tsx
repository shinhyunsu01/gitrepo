import React from "react";
import { Link } from "react-router-dom";
import { Logo, SearchIcon } from "../Libs/Icon";

const Navbar = () => {
	return (
		<header className=" w-full fixed bg-gray-50 px-4 py-2 grid grid-cols-2 sm:grid-cols-3 ">
			<Link to="/" className="hidden sm:block">
				<Logo />
			</Link>

			<div className="flex justify-center relative">
				<div className="absolute left-0 top-1">
					<SearchIcon />
				</div>
				<input
					className="w-full rounded-md  appearance-none pl-8 focus:ring-2 focus:ring-offset-2 focus:outline-none  focus:ring-[#3d58c1] "
					placeholder="Search Repository"
				/>
			</div>
			<div className="flex justify-end">
				<Link to="/" className="px-4 py-1 bg-[#3d58c1] text-white rounded-md">
					Store
				</Link>
			</div>
		</header>
	);
};

export default Navbar;
