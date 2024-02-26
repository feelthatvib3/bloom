'use client';

import type { Product, RootState } from '@/app/lib/definitions';

import { toast } from 'sonner';
import { useState } from 'react';
import { CheckIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid';

import { ROOT_URL } from '@/app/lib/constants';

import Button from '@/app/ui/Button';

import { clearCart } from '@/store/slices/cart-slice';
import { useAppDispatch, useAppSelector } from '@/app/lib/redux-hooks';

export default function OrderSummary() {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const { products, totalPrice } = useAppSelector(
		(state: RootState) => state.cart,
	);
	const dispatch = useAppDispatch();

	const subtotal = totalPrice;
	const tax = 3;
	const total = totalPrice + tax;

	const postOrder = async (order: Product[]) => {
		const response = await fetch(ROOT_URL + '/order/new', {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
			body: JSON.stringify(order),
		});

		if (!response.ok) throw new Error(response.statusText);

		const data = await response.json();
		return data.message;
	};

	const handleCheckout = async () => {
		try {
			setIsLoading(true);

			const responseMessage = await postOrder(products);
			dispatch(clearCart());

			toast(`${responseMessage}.`, {
				icon: <CheckIcon />,
			});
		} catch (error: any) {
			const errorMessage = error.message;
			toast(`${errorMessage}.`, {
				icon: <ExclamationTriangleIcon />,
			});
		} finally {
			setIsLoading(false);
		}
	};
	return (
		<div className="flex h-fit flex-col gap-y-4 border border-lime-950 p-4 lg:w-2/5">
			<p className="text-2xl font-semibold uppercase">Order summary</p>
			<div className="text-lg">
				<div className="flex justify-between gap-x-4">
					<p className="font-medium uppercase text-lime-950/65">Subtotal</p>
					<p className="font-medium">${subtotal.toFixed(2)}</p>
				</div>
				<div className="flex justify-between gap-x-4">
					<p className="font-medium uppercase text-lime-950/65">Tax</p>
					<p className="font-medium">${tax.toFixed(2)}</p>
				</div>
				<div className="flex justify-between gap-x-4">
					<p className="font-medium uppercase text-lime-950/65">Total</p>
					<p className="font-medium">${total.toFixed(2)}</p>
				</div>
			</div>
			<Button
				disabled={isLoading}
				label={isLoading ? 'Loading...' : 'Checkout'}
				onClick={handleCheckout}
			/>
		</div>
	);
}
