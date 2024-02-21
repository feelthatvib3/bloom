import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { type Product, type FilterOptions } from '@/store/types';

interface ProductsState {
	products: Product[];
	isLoading: boolean;
}

interface FetchProductsArgs {
	endpoint: string;
	filters?: FilterOptions;
}

const initialState: ProductsState = {
	products: [],
	isLoading: true,
};

export const fetchProducts = createAsyncThunk(
	'products/fetch',
	async ({ endpoint, filters }: FetchProductsArgs, thunkAPI) => {
		const url = new URL(endpoint, 'http://localhost:5555');
		if (filters) {
			Object.entries(filters).forEach(([key, value]) => {
				url.searchParams.set(key, String(value));
			});
		}

		const response: Response = await fetch(url.toString());
		if (response.status === 404) return [];

		const data = await response.json();
		return data;
	},
);

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		startLoading: (state) => {
			state.isLoading = true;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchProducts.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(fetchProducts.fulfilled, (state, action) => {
			state.products = action.payload;
			state.isLoading = false;
		});
		builder.addCase(fetchProducts.rejected, (state, action) => {
			state.products = [];
			state.isLoading = false;
		});
	},
});

export const { startLoading } = productsSlice.actions;

export default productsSlice.reducer;
