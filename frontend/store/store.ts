import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import categoriesSlice from '@/store/slices/categoriesSlice';

export const ROOT_URL: string = 'http://localhost:5555/';

export const store = configureStore({
	reducer: {
		categories: categoriesSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
