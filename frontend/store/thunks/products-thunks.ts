import { createAsyncThunk } from '@reduxjs/toolkit';
import { ROOT_URL } from '@/app/lib/constants';
import type { FetchProductsArgs } from '@/app/lib/definitions';

export const fetchProducts = createAsyncThunk(
	'products/fetch',
	async ({ endpoint, filters }: FetchProductsArgs, thunkAPI) => {
		const url = new URL(endpoint, ROOT_URL);
		if (filters) {
			Object.entries(filters).forEach(([key, value]) => {
				url.searchParams.set(key, String(value));
			});
		}

		const response = await fetch(url.toString());
		if (response.status === 404) return [];

		const data = await response.json();
		return data;
	},
);
