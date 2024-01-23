import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface Category {
    id: number;
    title: string;
    image: string;
    createdAt: Date;
    updatedAt: Date;
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
        const response: Response = await fetch(
            'http://localhost:3333/categories/all',
        );
        const data: Category[] = await response.json();
        return data;
    },
);

export const CategoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
        });
    },
});

export default CategoriesSlice.reducer;
