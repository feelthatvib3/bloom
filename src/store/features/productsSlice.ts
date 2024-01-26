import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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
    currentProduct: Product | null;
}

const initialState: ProductsState = {
    categoryTitle: '',
    products: [],
    currentProduct: null,
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

export const fetchProductById = createAsyncThunk(
    'products/fetchProductById',
    async (productId: string, thunkAPI) => {
        try {
            const response: Response = await fetch(
                `http://localhost:3333/products/${productId}`,
            );
            const productData: [Product] = await response.json();
            return productData[0];
        } catch (error) {
            console.error('Error fetching product by id:', error);
        }
    },
);

export const ProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        clearProducts: (state) => {
            state.products = [];
            state.categoryTitle = '';
        },
        clearCurrentProduct: (state) => {
            state.currentProduct = null;
        },
    },
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
        builder.addCase(fetchProductById.fulfilled, (state, action) => {
            if (action.payload) {
                state.currentProduct = action.payload;
            }
            state.categoryTitle = 'Discounted items';
        });
    },
});

export const { clearCurrentProduct, clearProducts } = ProductsSlice.actions;

export default ProductsSlice.reducer;
