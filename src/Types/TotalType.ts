export interface resultType {
	user: string;
	project: string;
	watching: number;
	forks: number;
	issuecount: number;
	stars: number;
}

export interface resultTotalType {
	totalLen: number;
	items: resultType[];
}
