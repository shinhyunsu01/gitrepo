import { atom } from "recoil";
import { getLocal } from "../Libs/localStorageUtil";
import { resultType } from "../Types/TotalType";

export const SaveDataAtom = atom<resultType[]>({
	key: "saveDataAtom",
	default: getLocal("gitRepo") || [],
});
