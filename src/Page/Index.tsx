import React from "react";
import Navbar from "../Components/Navbar";
import Nothing from "../Components/Nothing";

const Index = () => {
	return (
		<div>
			<Navbar />
			<div className="pt-12">
				<div className=" h-[calc(100vh-200px)] overflow-y-auto px-4">
					<Nothing title="검색 결과 가 없습니다" />
				</div>
			</div>
		</div>
	);
};

export default Index;
