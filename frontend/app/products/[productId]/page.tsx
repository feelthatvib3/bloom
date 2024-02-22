'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

import { toast } from 'sonner';
import { Skeleton } from '@/components/ui/skeleton';

import Button from '@/components/Button';
import Container from '@/components/Container';
import ProductPrice from '@/components/productCard/ProductPrice';
import ProductAmountCounter from '@/components/ProductAmountCounter';

import { ROOT_URL, RootState } from '@/store/store';
import { addToCart } from '@/store/slices/cart-slice';
import { fetchProduct } from '@/store/slices/product-slice';
import { useAppDispatch, useAppSelector } from '@/lib/redux-hooks';

export default function ProductPage() {
	const { productId } = useParams();
	const { product, isLoading } = useAppSelector(
		(state: RootState) => state.product,
	);

	const [productAmount, setProductAmount] = useState<number>(1);

	const handleAddToCart = () => {
		dispatch(addToCart({ addedProduct: product, count: productAmount }));
		toast(
			`You have added ${product?.name} to your cart in a quantity of ${productAmount}.`,
			{
				icon: <ShoppingCartIcon className="h-5 w-5" />,
			},
		);
	};

	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchProduct(productId as string));
	}, [dispatch, productId]);

	if (isLoading) {
		return (
			<Container className="grid items-center gap-4 pb-4 pt-[calc(1rem+69px)] md:grid-cols-2 lg:pb-8 lg:pt-[calc(2rem+69px)]">
				<Skeleton className="h-[350px] w-full lg:h-[500px]" />
				<div className="space-y-4 md:space-y-6">
					<Skeleton className="h-[45px] w-[300px]" />
					<Skeleton className="h-[50px] w-[200px]" />
					<div className="flex gap-x-4">
						<Skeleton className="h-[44px] w-2/5" />
						<Skeleton className="h-[44px] w-3/5" />
					</div>
					<div className="space-y-2">
						<Skeleton className="h-[28px] w-[150px]" />
						<Skeleton className="h-[100px] w-[350px]" />
					</div>
				</div>
			</Container>
		);
	}

	return (
		<Container className="grid items-center gap-4 pb-4 pt-[calc(1rem+69px)] md:grid-cols-2 lg:pb-8 lg:pt-[calc(2rem+69px)]">
			<div className="relative w-full shrink-0 border border-lime-950">
				<Image
					src={ROOT_URL + product?.image}
					width={500}
					height={500}
					alt={product?.name as string}
					className="h-full max-h-[500px] w-full object-cover"
				/>
				{product?.discount && (
					<div className="absolute left-2 top-2 bg-lime-950 p-2 text-lg font-medium text-lime-200">
						-{product?.discount}%
					</div>
				)}
			</div>
			<div className="space-y-4 md:space-y-6">
				<p className="text-4xl font-medium">{product?.name}</p>
				<ProductPrice
					regularPrice={product?.price as number}
					discountPercent={product?.discount as number}
					discountPercentShown={false}
				/>
				<div className="flex gap-x-4">
					<ProductAmountCounter
						productAmount={productAmount}
						setProductAmount={setProductAmount}
					/>
					<Button
						label="Add to cart"
						onClick={handleAddToCart}
						className="max-w-xs"
					/>
				</div>
				<div className="space-y-2">
					<p className="text-xl font-semibold">Product overview</p>
					<p className="line-clamp-4 max-w-md">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
						similique expedita non quibusdam? Fugiat dolores cumque dolorem eos
						eum doloribus beatae, quibusdam ex neque. Repellendus tempore
						tempora ratione perspiciatis obcaecati at aliquam a. Quia voluptatum
						atque iusto, vitae facilis debitis laborum, eos consequuntur
						corporis est, eligendi assumenda minima neque delectus soluta error!
						Animi, recusandae? Laboriosam asperiores porro obcaecati, minima
						aliquid delectus quis aut veritatis, ullam alias omnis nisi nam
						deserunt doloremque eos et voluptate rerum perspiciatis,
						consequuntur cupiditate reprehenderit dolores! Ad, molestias? Labore
						ut aut eius repellat incidunt? Dolores inventore magnam quam.
						Impedit eaque animi recusandae quisquam praesentium veniam
						excepturi.
					</p>
				</div>
			</div>
		</Container>
	);
}
