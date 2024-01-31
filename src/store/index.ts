import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import categoriesSlice from './features/categoriesSlice';
import productsSlice from './features/productsSlice';
import cartSlice from './features/cartSlice';

export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productsSlice,
        cart: cartSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
