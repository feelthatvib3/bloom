import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from '@/store/slices/categories-slice';
import productsSlice from '@/store/slices/products-slice';

export const ROOT_URL: string = 'http://localhost:5555/';

export const makeStore = () => {
	return configureStore({
		reducer: {
			categories: categoriesSlice,
			products: productsSlice,
		},
	});
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
