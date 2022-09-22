import React, { useEffect, useState } from "react";

export const useDebounce = (word: string, timeOut: number) => {
	const [debounce, setDebounce] = useState(word);

	useEffect(() => {
		let timeOutId = setTimeout(() => {
			setDebounce(word);
		}, timeOut);
		return () => {
			clearTimeout(timeOutId);
		};
	}, [word, timeOut]);

	return debounce;
};
