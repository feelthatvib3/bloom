export type FilterOptions = {
	search: string;
	fromPrice: string;
	toPrice: string;
	isDiscounted: string;
	sortBy: 'newest' | 'oldest' | 'alphabetical' | 'reverseAlphabetical';
};

export interface GetFilteredProductsArgs extends FilterOptions {
	categorySlug?: string;
}

export type SortingOption = {
	createdAt?: 'asc' | 'desc';
	name?: 'asc' | 'desc';
};
