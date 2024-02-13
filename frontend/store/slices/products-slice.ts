import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ROOT_URL } from '@/store/store';
import { Category } from '@/store/slices/categories-slice';

export interface Product {
	id: number;
	categoryId: string;
	categoryTitle: string;
	name: string;
	description: string;
	image: string;
	price: number;
	discount: number | null;
}

interface ProductsState {
	products: Product[];
	isLoading: boolean;
}

interface CategoryProductsResponseData extends Category {
	products: Product[];
}

const initialState: ProductsState = {
	products: [],
	isLoading: true,
};

export const fetchAllProducts = createAsyncThunk(
	'products/fetchAll',
	async (thunkAPI) => {
		const response: Response = await fetch(ROOT_URL + 'products/all');
		const data: Product[] = await response.json();
		return data;
	},
);

export const fetchProductsByCategorySlug = createAsyncThunk(
	'products/fetchCategory',
	async (categorySlug: string, thunkAPI) => {
		const response: Response = await fetch(
			ROOT_URL + 'products/' + categorySlug,
		);
		const data: CategoryProductsResponseData = await response.json();
		return data.products;
	},
);

export const productsSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
			state.products = action.payload;
			state.isLoading = false;
		});
		builder.addCase(fetchAllProducts.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(fetchAllProducts.rejected, (state, action) => {
			state.isLoading = false;
		});
		builder.addCase(fetchProductsByCategorySlug.fulfilled, (state, action) => {
			state.products = action.payload;
			state.isLoading = false;
		});
		builder.addCase(fetchProductsByCategorySlug.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(fetchProductsByCategorySlug.rejected, (state, action) => {
			state.isLoading = false;
		});
	},
});

export default productsSlice.reducer;
