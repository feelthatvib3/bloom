import { createSlice } from '@reduxjs/toolkit';
import { Product } from '@/store/slices/products-slice';

export interface CartProduct extends Product {
	amountAdded: number;
}

interface CartState {
	products: CartProduct[];
	totalItems: number;
	totalPrice: number;
}

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
			state.totalPrice = state.products.reduce(
				(total, product) => (total += product.price * product.amountAdded),
				0,
			);
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
			state.totalPrice = state.products.reduce(
				(total, product) => (total += product.price * product.amountAdded),
				0,
			);
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
			state.totalPrice = state.products.reduce(
				(total, product) => (total += product.price * product.amountAdded),
				0,
			);
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
			state.totalPrice = state.products.reduce(
				(total, product) => (total += product.price * product.amountAdded),
				0,
			);
		},
	},
});

export const { addToCart, incrementItem, decrementItem, removeFromCart } =
	cartSlice.actions;
export default cartSlice.reducer;
