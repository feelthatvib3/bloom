import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import categoriesSlice from './slices/categoriesSlice';
import productsSlice from './slices/productsSlice';
import cartSlice from './slices/cartSlice';
import modalSlice from './slices/modalSlice';

export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productsSlice,
        modal: modalSlice,
        cart: cartSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
