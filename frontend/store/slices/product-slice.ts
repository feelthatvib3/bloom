import type { ProductState } from '@/app/lib/definitions';

import { createSlice } from '@reduxjs/toolkit';
import { fetchProduct } from '@/store/thunks/product-thunks';

const initialState: ProductState = {
	product: null,
	isLoading: true,
};

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchProduct.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(fetchProduct.fulfilled, (state, action) => {
			state.product = action.payload;
			state.isLoading = false;
		});
		builder.addCase(fetchProduct.rejected, (state, action) => {
			state.product = null;
			state.isLoading = false;
		});
	},
});

export default productSlice.reducer;
