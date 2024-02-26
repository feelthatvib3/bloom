import type { ProductsState } from '@/app/lib/definitions';

import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from '@/store/thunks/products-thunks';

const initialState: ProductsState = {
	products: [],
	isLoading: true,
};

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
