export interface resultType {
	user: string;
	project: string;
	watching: number;
	forks: number;
	issuecount: number;
	stars: number;
	userAvatar: string;
}

export interface resultTotalType {
	totalLen: number;
	items: resultType[];
}
