'ues client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import ProductAmountCounter from '@/components/ProductAmountCounter';
import RemoveProductButton from '@/components/cart/RemoveProductButton';

import { ROOT_URL } from '@/store/store';
import { useAppDispatch } from '@/lib/redux-hooks';
import { CartProduct } from '@/store/slices/cart-slice';

interface CartListItemProps {
	product: CartProduct;
}

export default function CartListItem({ product }: CartListItemProps) {
	const { id, name, price, amountAdded, discount, image } = product;
	const [productAmount, setProductAmount] = useState<number>(amountAdded);
	const dispatch = useAppDispatch();

	useEffect(() => {}, [dispatch, productAmount]);

	let evaluatedPrice = '';
	discount
		? (evaluatedPrice = (
				(price - price * (discount / 100)) *
				amountAdded
			).toFixed(2))
		: (evaluatedPrice = (price * amountAdded).toFixed(2));
	return (
		<li className="flex max-h-[200px] items-center gap-x-2 divide-x divide-lime-950 overflow-hidden border border-lime-950">
			<div>
				<Image
					src={ROOT_URL + image}
					alt={name}
					width={300}
					height={300}
					className="h-full min-w-[155px] object-cover sm:w-full"
				/>
			</div>
			<div className="flex h-full w-full flex-col justify-between gap-y-4 p-2 sm:p-4">
				{/* title + remove from cart button */}
				<div className="flex items-start justify-between gap-x-4">
					<p className="line-clamp-2 text-2xl font-medium">{name}</p>
					<RemoveProductButton productId={id} />
				</div>

				{/* product amount counter */}
				<ProductAmountCounter
					productId={id}
					productAmount={productAmount}
					setProductAmount={setProductAmount}
				/>

				{/* move to bookmarks + price */}
				<div className="flex items-end justify-between gap-x-4">
					<p className="text-lg">${evaluatedPrice}</p>
				</div>
			</div>
		</li>
	);
}
