import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCategories = createAsyncThunk(
    'categories/fetch',
    async (thunkAPI) => {
        const response: Response = await fetch(
            'http://localhost:3333/categories/all',
        );
        const data = await response.json();
        return data;
    },
);
