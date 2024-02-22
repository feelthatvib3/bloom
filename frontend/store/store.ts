import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from '@/store/slices/categories-slice';
import productsSlice from '@/store/slices/products-slice';
import cartSlice from '@/store/slices/cart-slice';
import bookmarksSlice from '@/store/slices/bookmarks-slice';
import productSlice from '@/store/slices/product-slice';

export const ROOT_URL = 'http://localhost:5555/';

export const makeStore = () => {
	return configureStore({
		reducer: {
			categories: categoriesSlice,
			products: productsSlice,
			cart: cartSlice,
			bookmarks: bookmarksSlice,
			product: productSlice,
		},
	});
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
