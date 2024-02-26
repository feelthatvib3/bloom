import { makeStore } from '@/store/store';

// components

export type ButtonIntent = 'primary' | 'secondary';
export type ButtonIconPosition = 'left' | 'right';

// store defs

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

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
	search: string;
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

export interface FetchProductsArgs {
	endpoint: string;
	filters?: FilterOptions;
}

export interface BookmarksState {
	products: Product[];
}

export interface CartProduct extends Product {
	amountAdded: number;
}

export interface CartState {
	products: CartProduct[];
	totalItems: number;
	totalPrice: number;
}

export interface CategoriesState {
	categories: Category[];
	isLoading: boolean;
}

export interface ProductState {
	product: Product | null;
	isLoading: boolean;
}

export interface ProductsState {
	products: Product[];
	isLoading: boolean;
}

// static defs

export interface Feature {
	id: number;
	title: string;
	description: string;
}

export interface SelectValue {
	value: SortType;
	label: string;
}

export interface FooterCategory {
	id: number;
	title: string;
	items: FooterCategoryItem[];
}

export interface FooterCategoryItem {
	id: number;
	label: string;
	href: string;
}

export interface HeroCarouselItem {
	id: number;
	imageSrc: string;
	imageDescription: string;
}

export interface MenuItem {
	id: number;
	label: string;
	href: string;
}
