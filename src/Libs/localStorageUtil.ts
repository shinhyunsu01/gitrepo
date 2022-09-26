export const saveLocal = (key: string, data: any) => {
	localStorage.setItem(key, JSON.stringify(data));
};

export const getLocal = (key: string) => {
	const data: any = localStorage.getItem(key);
	return JSON.parse(data);
};
