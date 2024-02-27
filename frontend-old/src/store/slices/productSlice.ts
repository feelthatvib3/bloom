import type { ProductState } from '../../definitions';

import { createSlice } from '@reduxjs/toolkit';
import { fetchProductById } from '../thunks/productThunk';

const initialState: ProductState = {
    currentProduct: null,
};

export const productsSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        clearCurrentProduct: (state) => {
            state.currentProduct = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProductById.fulfilled, (state, action) => {
            if (action.payload) {
                state.currentProduct = action.payload;
            }
        });
    },
});

export const { clearCurrentProduct } = productsSlice.actions;

export default productsSlice.reducer;
