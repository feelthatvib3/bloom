import type { TypedUseSelectorHook } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import categoriesSlice from './slices/categoriesSlice';
import productsSlice from './slices/productsSlice';
import cartSlice from './slices/cartSlice';
import modalSlice from './slices/modalSlice';
import productSlice from './slices/productSlice';

export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productsSlice,
        product: productSlice,
        modal: modalSlice,
        cart: cartSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
