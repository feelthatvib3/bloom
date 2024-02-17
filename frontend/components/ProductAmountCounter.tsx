'use client';

import { Dispatch, SetStateAction } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid';

import { useAppDispatch } from '@/lib/redux-hooks';
import { decrementItem, incrementItem } from '@/store/slices/cart-slice';

interface ProductAmountCounterProps {
	productId?: string;
	productAmount: number;
	setProductAmount: Dispatch<SetStateAction<number>>;
}

export default function ProductAmountCounter({
	productId,
	productAmount,
	setProductAmount,
}: ProductAmountCounterProps) {
	const dispatch = useAppDispatch();

	const handleIncrement = () => {
		if (productId) {
			dispatch(incrementItem(productId));
		}
		setProductAmount(productAmount + 1);
	};

	const handleDecrement = () => {
		if (productId) {
			dispatch(decrementItem(productId));
		}
		setProductAmount(productAmount - 1);
	};
	return (
		<div className="flex max-w-[160px] justify-between border border-lime-950">
			<button
				disabled={productAmount === 1}
				className="flex items-center justify-center p-2 outline-none transition-all active:scale-[80%] disabled:text-lime-950/50 disabled:active:scale-100"
				onClick={handleDecrement}
			>
				<MinusIcon className="h-6 w-6" />
			</button>
			<input
				defaultValue={productAmount}
				value={productAmount}
				disabled
				className="max-w-12 bg-transparent p-2 text-center text-lg text-lime-950 caret-lime-950 outline-none"
			/>
			<button
				className="flex items-center justify-center p-2 outline-none transition-transform active:scale-[80%]"
				onClick={handleIncrement}
			>
				<PlusIcon className="h-6 w-6" />
			</button>
		</div>
	);
}
