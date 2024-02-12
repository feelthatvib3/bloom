import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ROOT_URL } from '@/store/store';

export interface Category {
	id: number;
	title: string;
	slug: string;
	description: string;
	image: string;
}

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
		const response: Response = await fetch(ROOT_URL + 'categories/all');
		const data: Category[] = await response.json();
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
