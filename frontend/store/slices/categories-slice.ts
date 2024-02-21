import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { ROOT_URL } from '@/store/store';
import { Category } from '@/store/types';

interface CategoriesState {
	categories: Category[];
	isLoading: boolean;
}

const initialState: CategoriesState = {
	categories: [],
	isLoading: true,
};

export const fetchCategories = createAsyncThunk(
	'categories/fetch',
	async (thunkAPI) => {
		const response = await fetch(ROOT_URL + 'categories/all');
		const data = await response.json();
		return data;
	},
);

export const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchCategories.fulfilled, (state, action) => {
			state.categories = action.payload;
			state.isLoading = false;
		});
		builder.addCase(fetchCategories.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(fetchCategories.rejected, (state, action) => {
			state.isLoading = false;
		});
	},
});

export default categoriesSlice.reducer;
