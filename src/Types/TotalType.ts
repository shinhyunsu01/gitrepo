export interface resultType {
	user: string;
	project: string;
	watching: number;
	forks: number;
	issuecount: number;
	stars: number;
	userAvatar?: string;
}

export interface resultTotalType {
	totalLen: number;
	items: resultType[];
}
export interface issuesType {
	url: string;
	title: string;
	updatetime: string;
	labels?: string[];
}

export interface resultIssuesType {
	totalLen: number;
	items: issuesType[];
}
