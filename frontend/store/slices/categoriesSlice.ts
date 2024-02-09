import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ROOT_URL } from '@/store/store';

export interface Category {
	id: number;
	title: string;
	slug: string;
	image: string;
}

interface CategoriesState {
	categories: Category[];
}

const initialState: CategoriesState = {
	categories: [],
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
		});
	},
});

export default categoriesSlice.reducer;
