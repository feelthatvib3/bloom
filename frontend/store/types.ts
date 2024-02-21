export interface Category {
	id: string;
	title: string;
	slug: string;
	description: string;
	image: string;
}

export interface Product {
	id: string;
	categoryId: string;
	categoryTitle: string;
	name: string;
	description: string;
	image: string;
	price: number;
	discount: number | null;
}

export type FilterOptions = {
	fromPrice: number;
	toPrice: number;
	isDiscounted: boolean;
	sortBy: SortType;
};

export type SortType =
	| 'newest'
	| 'oldest'
	| 'alphabetical'
	| 'reverseAlphabetical';
