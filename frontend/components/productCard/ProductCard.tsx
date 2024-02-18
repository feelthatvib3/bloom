'use client';

import Image from 'next/image';
import { MouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import { HeartIcon } from '@heroicons/react/24/outline';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

import ProductPrice from '@/components/productCard/ProductPrice';

import { toast } from 'sonner';

import { ROOT_URL } from '@/store/store';
import { useAppDispatch } from '@/lib/redux-hooks';
import { addToCart } from '@/store/slices/cart-slice';
import { Product } from '@/store/slices/products-slice';

interface ProductCardProps {
	product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
	const { id, categoryTitle, name, price, discount, image } = product;
	const router = useRouter();
	const dispatch = useAppDispatch();
	const handleAddToCart = (
		e: MouseEvent<HTMLButtonElement>,
		product: Product,
	) => {
		e.stopPropagation();
		dispatch(addToCart({ addedProduct: product, count: 1 }));
		toast(`${product.name} has been added to your cart.`, {
			icon: <ShoppingCartIcon className="h-5 w-5" />,
		});
	};
	return (
		<li
			onClick={() => router.push(categoryTitle.toLowerCase() + '/' + id)}
			className="min-w-xs relative min-h-[450px] cursor-pointer p-4 text-lime-200"
		>
			{/* category title badge */}
			<span className="absolute right-4 top-4 bg-lime-200 p-1 font-medium text-lime-950">
				{categoryTitle}
			</span>

			{/* background image */}
			<Image
				src={ROOT_URL + image}
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
						src={ROOT_URL + image}
						alt={name}
						width={300}
						height={300}
						className="h-full w-full object-cover"
					/>
				</div>
				<div>
					<p className="line-clamp-1 text-4xl font-medium">{name}</p>
					<div className="mt-8">
						<ProductPrice regularPrice={price} discountPercent={discount} />
						<div className="mt-2 flex gap-x-2">
							<button
								onClick={(e) => handleAddToCart(e, product)}
								className="colors w-[85%] border border-lime-200 bg-lime-200 px-4 py-2 text-xl font-medium text-lime-950 transition hover:bg-transparent hover:text-lime-200 lg:w-[80%]"
							>
								Add to cart
							</button>
							<button className="group flex w-[15%] shrink-0 items-center justify-center bg-lime-200 p-2 text-lime-950 lg:w-[20%]">
								<HeartIcon className="h-6 w-6 group-hover:fill-lime-950" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</li>
	);
}
