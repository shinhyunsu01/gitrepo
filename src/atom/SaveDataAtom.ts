import { atom } from "recoil";
import { resultType } from "../Types/TotalType";

export const SaveDataAtom = atom<resultType[]>({
	key: "saveDataAtom",
	default: [],
});
