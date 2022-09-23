export const saveLocal = (data: any) => {
	localStorage.setItem("gitRepo", JSON.stringify(data));
};

export const getLocal = (key: string) => {
	const data: any = localStorage.getItem(key);
	return JSON.parse(data);
};
