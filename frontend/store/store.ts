import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import categoriesSlice from '@/store/slices/categoriesSlice';

export const ROOT_URL: string = 'http://localhost:5555/';

export const makeStore = () => {
	return configureStore({
		reducer: {
			categories: categoriesSlice,
		},
	});
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
