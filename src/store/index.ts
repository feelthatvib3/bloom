import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { CategoriesSlice } from './features/categoriesSlice';
import { productsSlice } from './features/productsSlice';
import cartSlice from './features/cartSlice';

export const store = configureStore({
    reducer: {
        categories: CategoriesSlice.reducer,
        products: productsSlice.reducer,
        cart: cartSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
