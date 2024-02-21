import { SortType } from '@/store/types';

interface SelectValue {
	value: SortType;
	label: string;
}

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
