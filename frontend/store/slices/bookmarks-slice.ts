import type { BookmarksState } from '@/app/lib/definitions';

import { createSlice } from '@reduxjs/toolkit';

const initialState: BookmarksState = {
	products: [],
};

export const bookmarksSlice = createSlice({
	name: 'bookmarks',
	initialState,
	reducers: {
		addToBookmarks: (state, action) => {
			const product = action.payload;
			state.products.push(product);
		},
		removeFromBookmarks: (state, action) => {
			const productId = action.payload;
			state.products = state.products.filter(
				(product) => product.id !== productId,
			);
		},
	},
});

export const { addToBookmarks, removeFromBookmarks } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;
