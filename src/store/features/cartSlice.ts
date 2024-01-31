import { createSlice, current } from '@reduxjs/toolkit';
import { Product } from './productsSlice';

interface CartProducts extends Product {
    amountAdded: number;
}

interface CartState {
    products: CartProducts[];
    uniqueProducts: number;
    productsAdded: number;
}

const initialState: CartState = {
    products: [],
    uniqueProducts: 0,
    productsAdded: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { product, count } = action.payload;
            if (
                state.products.find(
                    (product) => product.id === action.payload.id,
                )
            ) {
                state.products = state.products.map((product) => {
                    if (product.id === action.payload.id) {
                        return {
                            ...product,
                            amountAdded: count,
                        };
                    }

                    return product;
                });
            } else {
                state.products.push({ ...product, amountAdded: count });
            }

            state.productsAdded = state.products.reduce(
                (accumulator, currentValue) =>
                    accumulator + currentValue.amountAdded,
                0,
            );
        },
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
