import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { SaveDataAtom } from "../atom/SaveDataAtom";
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";
import Nothing from "../Components/Nothing";
import { resultType } from "../Types/TotalType";

const Index = () => {
	const [saveDataAtom, setSaveDataAtom] =
		useRecoilState<resultType[]>(SaveDataAtom);

	return (
		<div>
			<Navbar />
			<div className="pt-16">
				<div className=" md:h-[calc(100vh-200px)] overflow-y-auto px-4">
					{saveDataAtom.length === 0 ? (
						<Nothing title="저장된 데이터 가 없습니다" />
					) : (
						<div className="w-full flex items-center flex-wrap justify-center  ">
							{saveDataAtom.map((item, index) => (
								<Card item={item} key={index} />
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Index;
