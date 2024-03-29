'use client';

import type { CartProduct, RootState } from '@/app/lib/definitions';

import Title from '@/app/ui/Title';
import Container from '@/app/ui/Container';
import CartListItem from '@/app/cart/components/CartListItem';
import OrderSummary from '@/app/cart/components/OrderSummary';

import { useAppSelector } from '@/app/lib/redux-hooks';

export default function CartPage() {
	const { products } = useAppSelector((state: RootState) => state.cart);

	if (products.length === 0) {
		return (
			<Container className="flex h-[75vh] items-center justify-center">
				<p className="text-center text-2xl">
					How come you have your cart empty? Let&apos;s shop!
				</p>
			</Container>
		);
	}
	return (
		<Container className="pb-4 pt-[calc(1rem+69px)] lg:pb-8 lg:pt-[calc(2rem+69px)]">
			<Title>Shopping cart</Title>
			<div className="mt-8 flex flex-col gap-y-2 lg:flex-row lg:gap-x-2 lg:gap-y-2">
				<ul className="grid scroll-m-11 gap-y-2 lg:w-3/5">
					{products.map((product: CartProduct) => (
						<CartListItem key={product.id} product={product} />
					))}
				</ul>
				<OrderSummary />
			</div>
		</Container>
	);
}
