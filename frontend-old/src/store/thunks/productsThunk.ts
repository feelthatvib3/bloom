import type { Product } from '../../definitions';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllProducts = createAsyncThunk(
    'products/fetchAllProducts',
    async (thunkAPI) => {
        const response: Response = await fetch(
            'http://localhost:3333/products/all',
        );
        const data = await response.json();
        return data;
    },
);

export const fetchProductsByCategoryId = createAsyncThunk(
    'products/fetchProductsById',
    async (categoryId: string, thunkAPI) => {
        const response: Response = await fetch(
            `http://localhost:3333/categories/${categoryId}`,
        );
        const data = await response.json();
        return data;
    },
);

export const fetchDiscountedProducts = createAsyncThunk(
    'products/fetchDiscountedProducts',
    async (thunkAPI) => {
        const response: Response = await fetch(
            'http://localhost:3333/products/all',
        );
        const data = await response.json();
        return data.filter((product: Product) => product.discont_price);
    },
);
