import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { CategoriesSlice } from './features/categoriesSlice';
import { ProductsSlice } from './features/productsSlice';

export const store = configureStore({
    reducer: {
        categories: CategoriesSlice.reducer,
        products: ProductsSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
