import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string) => {
	const [value, setValue] = useState<boolean>(false);

	useEffect(() => {
		function onChange(event: MediaQueryListEvent) {
			setValue(event.matches);
		}

		const result = matchMedia(query);
		result.addEventListener('change', onChange);
		setValue(result.matches);

		return () => result.removeEventListener('change', onChange);
	}, [query]);

	return value;
};