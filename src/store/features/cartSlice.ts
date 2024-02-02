import { createSlice } from '@reduxjs/toolkit';
import { Product } from './productsSlice';

export interface CartProduct extends Product {
    amountAdded: number;
}

interface CartState {
    products: CartProduct[];
    productsAdded: number;
}

const initialState: CartState = {
    products: [],
    productsAdded: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { product, count } = action.payload;
            const existingProduct = state.products.find(
                (existingProduct) => product.id === existingProduct.id,
            );

            if (existingProduct) {
                state.products = state.products.map((product) =>
                    product.id === existingProduct.id
                        ? {
                              ...product,
                              amountAdded: product.amountAdded + count,
                          }
                        : product,
                );
            } else {
                state.products.push({ ...product, amountAdded: count });
            }

            state.productsAdded = state.products.reduce(
                (accumulator, currentValue) =>
                    accumulator + currentValue.amountAdded,
                0,
            );
        },
        removeProductFromCart: (state, action) => {
            state.products = state.products.filter(
                (product) => product.id !== action.payload,
            );
            state.productsAdded = state.products.reduce(
                (accumulator, currentValue) =>
                    accumulator + currentValue.amountAdded,
                0,
            );
        },
        increaseProductCount: (state, action) => {
            const productId = action.payload;
            state.products = state.products.map((existingProduct) => {
                if (existingProduct.id === productId) {
                    return {
                        ...existingProduct,
                        amountAdded: existingProduct.amountAdded + 1,
                    };
                } else {
                    return existingProduct;
                }
            });
        },
        decreaseProductCount: (state, action) => {
            const productId = action.payload;
            state.products = state.products.map((existingProduct) => {
                if (existingProduct.id === productId) {
                    return {
                        ...existingProduct,
                        amountAdded: existingProduct.amountAdded - 1,
                    };
                } else {
                    return existingProduct;
                }
            });
        },
        updateProductsAmount: (state) => {
            state.productsAdded = state.products.reduce(
                (accumulator, currentValue) =>
                    accumulator + currentValue.amountAdded,
                0,
            );
        },
    },
});

export const {
    addToCart,
    removeProductFromCart,
    increaseProductCount,
    decreaseProductCount,
    updateProductsAmount,
} = cartSlice.actions;
export default cartSlice.reducer;
