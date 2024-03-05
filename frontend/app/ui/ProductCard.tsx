'use client';

import type { MouseEvent } from 'react';
import type { Product, RootState } from '@/app/lib/definitions';

import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'sonner';
import { useEffect, useState } from 'react';
import {
	HeartIcon as HeartIconOutline,
	BookmarkIcon as BookmarkIconOutline,
} from '@heroicons/react/24/outline';
import {
	ShoppingCartIcon,
	HeartIcon as HeartIconSolid,
	BookmarkIcon as BookmarkIconSolid,
} from '@heroicons/react/24/solid';

import { ROOT_URL } from '@/app/lib/constants';

import Button from '@/app/ui/Button';
import IconButton from '@/app/ui/IconButton';
import ProductPrice from '@/app/ui/ProductPrice';

import { useAppDispatch, useAppSelector } from '@/app/lib/redux-hooks';
import { addToCart } from '@/store/slices/cart-slice';
import {
	addToBookmarks,
	removeFromBookmarks,
} from '@/store/slices/bookmarks-slice';

interface ProductCardProps {
	product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
	const { id, categoryTitle, name, price, discount, image } = product;
	const { products } = useAppSelector((state: RootState) => state.bookmarks);
	const dispatch = useAppDispatch();

	const [isProductAdded, setIsProductAdded] = useState<boolean>(false);

	const isBookmarked = products.find(
		(existingProduct) => existingProduct.id === product.id,
	);

	const handleAddToCart = (
		event: MouseEvent<HTMLButtonElement>,
		product: Product,
	) => {
		event.preventDefault();

		dispatch(addToCart({ addedProduct: product, count: 1 }));
		setIsProductAdded(true);
		toast(`${product.name} has been added to your cart.`, {
			icon: <ShoppingCartIcon />,
		});
	};

	const handleAddToBookmarks = (
		e: MouseEvent<HTMLButtonElement>,
		product: Product,
	) => {
		e.preventDefault();

		if (isBookmarked) {
			dispatch(removeFromBookmarks(product.id));
			toast(`${product.name} is successfully unbookmarked.`, {
				icon: <BookmarkIconOutline />,
			});
		} else {
			dispatch(addToBookmarks(product));
			toast(`${product.name} has been bookmarked.`, {
				icon: <BookmarkIconSolid />,
			});
		}
	};

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setIsProductAdded(false);
		}, 1.5 * 1000);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [isProductAdded]);
	return (
		<li className="min-w-xs relative min-h-[450px] cursor-pointer text-lime-200">
			<Link href={`/products/${id}`} className="block p-4">
				{/* category title badge */}
				<span className="absolute right-4 top-4 bg-lime-200 p-1 font-medium text-lime-950">
					{categoryTitle}
				</span>

				{/* background image */}
				<Image
					src={`${ROOT_URL}/${image}`}
					alt={name}
					width={320}
					height={320}
					className="absolute left-0 top-0 -z-20 h-full w-full object-cover"
					quality={0}
				/>

				{/* overlay */}
				<div className="absolute left-0 top-0 -z-10 h-full w-full bg-lime-950/80 backdrop-blur-xl transition-colors group-hover:bg-lime-200/70"></div>

				{/* content */}
				<div>
					<div>
						<Image
							src={`${ROOT_URL}/${image}`}
							alt={name}
							width={300}
							height={300}
							className="h-full w-full object-cover"
						/>
					</div>
					<div>
						<p className="line-clamp-1 text-4xl font-medium">{name}</p>
						<div className="mt-6">
							<ProductPrice regularPrice={price} discountPercent={discount} />
							<div className="mt-2 flex gap-x-2">
								<Button
									disabled={isProductAdded}
									onClick={(e) => handleAddToCart(e, product)}
									label={isProductAdded ? 'Added' : 'Add to cart'}
									icon={<ShoppingCartIcon className="h-6 w-6" />}
									iconPosition="left"
									intent="secondary"
									className="text-xl"
								/>
								<IconButton
									icon={
										isBookmarked ? (
											<HeartIconSolid className="h-6 w-6" />
										) : (
											<HeartIconOutline className="h-6 w-6" />
										)
									}
									onClick={(event) => handleAddToBookmarks(event, product)}
									className="min-w-12 grow-0"
								/>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</li>
	);
}
