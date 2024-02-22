import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { ROOT_URL } from '@/store/store';
import { type Product } from '@/store/types';

interface ProductState {
	product: Product | null;
	isLoading: boolean;
}

const initialState: ProductState = {
	product: null,
	isLoading: true,
};

export const fetchProduct = createAsyncThunk(
	'product/fetch',
	async (productId: string, thunkAPI) => {
		const response = await fetch(ROOT_URL + `product/${productId}`);
		if (!response.ok) thunkAPI.rejectWithValue(response.statusText);

		const data = await response.json();
		return data;
	},
);

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
