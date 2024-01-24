import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface Product {
    id: number;
    title: string;
    price: number;
    discont_price: number | null;
    description: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    categoryId: number;
}

interface ProductsState {
    products: Product[];
}

const initialState: ProductsState = {
    products: [],
};

export const fetchProducts = createAsyncThunk(
    'products/fetch',
    async (thunkAPI) => {
        const response: Response = await fetch(
            'http://localhost:3333/products/all',
        );
        const data: Product[] = await response.json();
        return data;
    },
);

export const ProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
        });
    },
});

export default ProductsSlice.reducer;
