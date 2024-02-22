'use client';

import { MouseEvent, useEffect, useState } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

import { toast } from 'sonner';

import { type Product } from '@/store/types';
import { useAppDispatch } from '@/lib/redux-hooks';
import { addToCart } from '@/store/slices/cart-slice';

interface AddToCartButtonProps {
	product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
	const [isAdded, setIsAdded] = useState<boolean>(false);
	const dispatch = useAppDispatch();

	const handleAddToCart = (
		e: MouseEvent<HTMLButtonElement>,
		product: Product,
	) => {
		e.preventDefault();

		dispatch(addToCart({ addedProduct: product, count: 1 }));
		setIsAdded(true);
		toast(`${product.name} has been added to your cart.`, {
			icon: <ShoppingCartIcon />,
		});
	};

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setIsAdded(false);
		}, 1.5 * 1000);
		return () => {
			clearTimeout(timeoutId);
		};
	}, [isAdded]);
	return (
		<button
			disabled={isAdded}
			onClick={(e) => handleAddToCart(e, product)}
			className="w-[85%] border border-lime-200 bg-lime-200 px-4 py-2 text-xl font-medium text-lime-950 transition hover:bg-transparent hover:text-lime-200 lg:w-[80%]"
		>
			{isAdded ? 'Added' : 'Add to cart'}
		</button>
	);
}
