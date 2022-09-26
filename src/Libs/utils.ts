export function cls(...classnames: string[]) {
	return classnames.join(" ");
}

export function threeDigit(str: number) {
	return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function agoTime(str: string) {
	const date = new Date();
	const arr = str.split(":");
	const monthHour = arr[0].split("T");
	const monDay = monthHour[0].split("-");
	if (date.getMonth() + 1 - Number(monDay[1]) === 0) {
		if (date.getDate() - Number(monDay[2]) === 0) {
			if (date.getHours() - Number(monthHour[1])) {
				return date.getHours() - Number(monthHour[1]) + " hours ago";
			}
		} else {
			return date.getDate() - Number(monDay[2]) + " days ago";
		}
	} else {
		return date.getMonth() + 1 - Number(monDay[1]) + " month ago";
	}
	return "";
}
