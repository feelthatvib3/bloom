import type { CategoriesState } from '../../definitions';

import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories } from '../thunks/categoriesThunk';

const initialState: CategoriesState = {
    categories: [],
};

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
