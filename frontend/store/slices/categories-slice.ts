import type { CategoriesState } from '@/app/lib/definitions';

import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories } from '@/store/thunks/categories-thunks';

const initialState: CategoriesState = {
	categories: [],
	isLoading: true,
};

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
