'use client';

import Title from '@/components/Title';
import Container from '@/components/Container';
import CartListItem from '@/components/cart/CartListItem';
import OrderSummary from '@/components/cart/OrderSummary';

import { RootState } from '@/store/store';
import { useAppSelector } from '@/lib/redux-hooks';
import { CartProduct } from '@/store/slices/cart-slice';

export default function CartPage() {
	const { products, totalItems, totalPrice } = useAppSelector(
		(state: RootState) => state.cart,
	);
	return (
		<main className="pb-4 pt-[calc(1rem+69px)] lg:pb-8 lg:pt-[calc(2rem+69px)]">
			<Container>
				<Title>Shopping cart</Title>
				<div>
					{products.length === 0 ? (
						<div>No products added.</div>
					) : (
						<div className="mt-8 flex flex-col gap-y-2 lg:flex-row lg:gap-x-2 lg:gap-y-2">
							<ul className="grid shrink-0 gap-y-2">
								{products.map((product: CartProduct) => (
									<CartListItem key={product.id} product={product} />
								))}
							</ul>
							<OrderSummary />
						</div>
					)}
				</div>
			</Container>
		</main>
	);
}
