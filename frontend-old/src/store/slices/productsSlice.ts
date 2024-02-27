import type { Product, ProductsState, SortValue } from '../../definitions';

import { createSlice } from '@reduxjs/toolkit';
import {
    fetchAllProducts,
    fetchDiscountedProducts,
    fetchProductsByCategoryId,
} from '../thunks/productsThunk';

const initialState: ProductsState = {
    categoryTitle: '',
    products: [],
};

const addIsShownProp = (array: Product[]) =>
    array.map((product) => ({ ...product, isShown: true, isShownPrice: true }));

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        clearProducts: (state) => {
            state.products = [];
            state.categoryTitle = '';
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
    },
});

export const {
    clearProducts,
    sortProducts,
    showDiscountedOnly,
    filterByPrice,
} = productsSlice.actions;

export default productsSlice.reducer;
