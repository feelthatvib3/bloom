import type { CartState } from '@/app/lib/definitions';

import { createSlice } from '@reduxjs/toolkit';

const initialState: CartState = {
	products: [],
	totalItems: 0,
	totalPrice: 0,
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const { addedProduct, count } = action.payload;
			const existingProduct = state.products.find(
				(existingProduct) => existingProduct.id === addedProduct.id,
			);

			if (existingProduct) {
				state.products = state.products.map((product) =>
					product.id === existingProduct.id
						? { ...product, amountAdded: product.amountAdded + count }
						: product,
				);
			} else {
				state.products.push({ ...addedProduct, amountAdded: count });
			}

			state.totalItems = state.products.reduce(
				(totalAmount, product) => totalAmount + product.amountAdded,
				0,
			);
			state.totalPrice = state.products.reduce((total, product) => {
				if (product.discount) {
					total += product.price - product.price * (product.discount / 100);
				} else {
					total += product.price * product.amountAdded;
				}

				return total;
			}, 0);
		},
		incrementItem: (state, action) => {
			const productId = action.payload;

			state.products = state.products.map((product) =>
				product.id === productId
					? { ...product, amountAdded: product.amountAdded + 1 }
					: product,
			);

			state.totalItems = state.products.reduce(
				(totalAmount, product) => totalAmount + product.amountAdded,
				0,
			);

			state.totalPrice = state.products.reduce((total, product) => {
				if (product.discount) {
					const discountPrice =
						product.price - product.price * (product.discount / 100);
					total += discountPrice * product.amountAdded;
				} else {
					total += product.price * product.amountAdded;
				}

				return total;
			}, 0);
		},
		decrementItem: (state, action) => {
			const productId = action.payload;

			state.products = state.products.map((product) =>
				product.id === productId
					? { ...product, amountAdded: product.amountAdded - 1 }
					: product,
			);
			state.totalItems = state.products.reduce(
				(totalAmount, product) => totalAmount + product.amountAdded,
				0,
			);
			state.totalPrice = state.products.reduce((total, product) => {
				if (product.discount) {
					total += product.price - product.price * (product.discount / 100);
				} else {
					total += product.price * product.amountAdded;
				}

				return total;
			}, 0);
		},
		removeFromCart: (state, action) => {
			const productId = action.payload;

			state.products = state.products.filter(
				(product) => product.id !== productId,
			);
			state.totalItems = state.products.reduce(
				(totalAmount, product) => totalAmount + product.amountAdded,
				0,
			);
			state.totalPrice = state.products.reduce((total, product) => {
				if (product.discount) {
					total += product.price - product.price * (product.discount / 100);
				} else {
					total += product.price * product.amountAdded;
				}

				return total;
			}, 0);
		},
		clearCart: (state) => {
			state.products = [];
			state.totalItems = 0;
			state.totalPrice = 0;
		},
	},
});

export const {
	addToCart,
	incrementItem,
	decrementItem,
	removeFromCart,
	clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
