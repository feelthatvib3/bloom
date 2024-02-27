import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProductById = createAsyncThunk(
    'products/fetchProductById',
    async (productId: string, thunkAPI) => {
        const response: Response = await fetch(
            `http://localhost:3333/products/${productId}`,
        );
        const productData = await response.json();
        return productData[0];
    },
);
