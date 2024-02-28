'use client';

import type { RootState } from '@/app/lib/definitions';

import { useState } from 'react';

import Button from '@/app/ui/Button';
import CheckoutForm from '@/app/cart/components/CheckoutForm';

import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogTrigger,
} from '@/components/ui/dialog';

import { useAppSelector } from '@/app/lib/redux-hooks';
import { XMarkIcon } from '@heroicons/react/24/solid';

export default function OrderSummary() {
	const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

	const { products, totalPrice } = useAppSelector(
		(state: RootState) => state.cart,
	);

	const subtotal = totalPrice;
	const tax = 3;
	const total = totalPrice + tax;
	return (
		<>
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
				<Dialog open={isModalOpened} onOpenChange={setIsModalOpened}>
					<DialogTrigger asChild>
						<Button label="Checkout" />
					</DialogTrigger>
					<DialogContent className="!rounded-none border-lime-100 bg-lime-100 sm:max-w-[425px]">
						<div className="flex flex-row items-center justify-between">
							<p className="text-3xl font-semibold uppercase">Checkout</p>
							<DialogClose className="relative flex flex-col items-center justify-center bg-transparent p-1 transition-colors hover:bg-lime-700/10">
								<XMarkIcon className="h-7 w-7 text-lime-950/85" />
							</DialogClose>
						</div>
						<CheckoutForm
							order={products}
							setIsModalOpened={setIsModalOpened}
						/>
					</DialogContent>
				</Dialog>
			</div>
		</>
	);
}
