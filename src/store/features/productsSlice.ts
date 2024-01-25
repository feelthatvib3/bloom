import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { Category } from './categoriesSlice';

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
    categoryTitle: string;
    products: Product[];
}

const initialState: ProductsState = {
    categoryTitle: '',
    products: [],
};

export const fetchAllProducts = createAsyncThunk(
    'products/fetchAllProducts',
    async (thunkAPI) => {
        const response: Response = await fetch(
            'http://localhost:3333/products/all',
        );
        const data: Product[] = await response.json();
        return data;
    },
);

export const fetchProductsByCategoryId = createAsyncThunk(
    'products/fetchProductsById',
    async (categoryId: string, thunkAPI) => {
        const response: Response = await fetch(
            `http://localhost:3333/categories/${categoryId}`,
        );
        const data: { category: Category; data: Product[] } =
            await response.json();
        return data;
    },
);

export const fetchDiscountedProducts = createAsyncThunk(
    'products/fetchDiscountedProducts',
    async (thunkAPI) => {
        const response: Response = await fetch(
            'http://localhost:3333/products/all',
        );
        const data: Product[] = await response.json();
        return data.filter((product) => product.discont_price);
    },
);

export const ProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.categoryTitle = 'All products';
        });
        builder.addCase(
            fetchProductsByCategoryId.fulfilled,
            (state, action) => {
                state.products = action.payload.data;
                state.categoryTitle = action.payload.category.title;
            },
        );
        builder.addCase(fetchDiscountedProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.categoryTitle = 'Discounted items';
        });
    },
});

export default ProductsSlice.reducer;
