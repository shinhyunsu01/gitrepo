export function cls(...classnames: string[]) {
	return classnames.join(" ");
}

export function threeDigit(str: number) {
	return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
