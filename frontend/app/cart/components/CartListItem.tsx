'ues client';

import type { CartProduct } from '@/app/lib/definitions';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import { ROOT_URL } from '@/app/lib/constants';

import ProductAmountCounter from '@/app/ui/ProductAmountCounter';
import RemoveProductButton from '@/app/cart/components/RemoveProductButton';

interface CartListItemProps {
	product: CartProduct;
}

export default function CartListItem({ product }: CartListItemProps) {
	const { id, name, price, amountAdded, discount, image } = product;
	const [productAmount, setProductAmount] = useState<number>(amountAdded);

	let evaluatedPrice = '';
	discount
		? (evaluatedPrice = (
				(price - price * (discount / 100)) *
				amountAdded
			).toFixed(2))
		: (evaluatedPrice = (price * amountAdded).toFixed(2));
	return (
		<li className="flex max-h-[200px] items-center gap-x-2 divide-x divide-lime-950 overflow-hidden border border-lime-950 sm:grid sm:grid-cols-8">
			<div className="p-4 sm:col-span-2">
				<Image
					src={`${ROOT_URL}/${image}`}
					alt={name}
					width={300}
					height={300}
					className="h-full min-w-[155px] object-cover sm:w-full"
				/>
			</div>
			<div className="flex h-full w-full flex-col justify-between gap-y-4 p-2 sm:col-span-6 sm:p-4">
				{/* title + remove from cart button */}
				<div className="flex items-start justify-between gap-x-4">
					<Link
						href={`/products/${id}`}
						className="line-clamp-2 text-2xl font-medium"
					>
						{name}
					</Link>
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
