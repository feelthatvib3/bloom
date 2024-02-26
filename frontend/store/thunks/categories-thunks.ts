import { createAsyncThunk } from '@reduxjs/toolkit';
import { ROOT_URL } from '@/app/lib/constants';

export const fetchCategories = createAsyncThunk(
	'categories/fetch',
	async (thunkAPI) => {
		const response = await fetch(ROOT_URL + '/categories/all');
		const data = await response.json();
		return data;
	},
);
