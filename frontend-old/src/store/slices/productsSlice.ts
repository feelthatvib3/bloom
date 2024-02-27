import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Category } from './categoriesSlice';
import { SortValue } from '../../components/ui/ProductFilter';

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
    products: ExtendedProduct[];
    currentProduct: Product | null;
}

interface ExtendedProduct extends Product {
    isShown: boolean;
    isShownPrice: boolean;
}

const initialState: ProductsState = {
    categoryTitle: '',
    products: [],
    currentProduct: null,
};

const addIsShownProp = (array: Product[]) =>
    array.map((product) => ({ ...product, isShown: true, isShownPrice: true }));

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

export const productsSlice = createSlice({
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
        sortProducts: (state, action) => {
            const sortValue = action.payload as SortValue;

            if (sortValue === 'price-asc') {
                state.products.sort((a, b) => a.price - b.price);
            } else if (sortValue === 'price-desc') {
                state.products.sort((a, b) => b.price - a.price);
            } else if (sortValue === 'title-asc') {
                state.products.sort((a, b) => b.title.localeCompare(a.title));
            } else if (sortValue === 'title-desc') {
                state.products.sort((a, b) => a.title.localeCompare(b.title));
            } else {
                state.products.sort((a, b) => a.id - b.id);
            }
        },
        showDiscountedOnly: (state, action) => {
            const checkboxChecked = action.payload;
            if (checkboxChecked) {
                state.products = state.products.map((product) => {
                    if (!product.discont_price) product.isShown = false;

                    return product;
                });
            } else {
                state.products = state.products.map((product) => ({
                    ...product,
                    isShown: true,
                }));
            }
        },
        filterByPrice: (state, action) => {
            const { from, to } = action.payload;

            const showProducts = state.products.map((product) => ({
                ...product,
                isShownPrice: true,
            }));

            state.products = showProducts.map((product) => {
                const price = product.discont_price ?? product.price;

                if (price < from || price > to) {
                    product.isShownPrice = false;
                }

                return product;
            });
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.products = addIsShownProp(action.payload);
            state.categoryTitle = 'All products';
        });
        builder.addCase(
            fetchProductsByCategoryId.fulfilled,
            (state, action) => {
                state.products = addIsShownProp(action.payload.data);
                state.categoryTitle = action.payload.category.title;
            },
        );
        builder.addCase(fetchDiscountedProducts.fulfilled, (state, action) => {
            state.products = addIsShownProp(action.payload);
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

export const {
    clearCurrentProduct,
    clearProducts,
    sortProducts,
    showDiscountedOnly,
    filterByPrice,
} = productsSlice.actions;

export default productsSlice.reducer;
