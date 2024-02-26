import type { SelectValue } from '@/app/lib/definitions';

export const selectValues: SelectValue[] = [
	{
		value: 'newest',
		label: 'Newest',
	},
	{
		value: 'oldest',
		label: 'Oldest',
	},
	{
		value: 'alphabetical',
		label: 'A-Z',
	},
	{
		value: 'reverseAlphabetical',
		label: 'Z-A',
	},
];
