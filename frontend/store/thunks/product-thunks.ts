import { createAsyncThunk } from '@reduxjs/toolkit';
import { ROOT_URL } from '@/app/lib/constants';

export const fetchProduct = createAsyncThunk(
	'product/fetch',
	async (productId: string, thunkAPI) => {
		const response = await fetch(ROOT_URL + `/product/${productId}`);
		if (!response.ok) thunkAPI.rejectWithValue(response.statusText);

		const data = await response.json();
		return data;
	},
);
