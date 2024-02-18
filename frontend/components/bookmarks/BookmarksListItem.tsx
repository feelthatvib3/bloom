import Image from 'next/image';

import ProductPrice from '@/components/productCard/ProductPrice';
import BookmarkButton from '@/components/productCard/BookmarkButton';

import { Product } from '@/store/slices/products-slice';
import { ROOT_URL } from '@/store/store';

interface BookmarksListItemProps {
	product: Product;
}

export default function BookmarksListItem({ product }: BookmarksListItemProps) {
	const { categoryTitle, image, name, price, discount } = product;
	return (
		<li className="min-w-xs relative min-h-[450px] cursor-pointer p-4 text-lime-200">
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
					<div className="mt-6">
						<ProductPrice regularPrice={price} discountPercent={discount} />
						<div className="mt-2 flex gap-x-2">
							<BookmarkButton product={product} primaryBtn />
						</div>
					</div>
				</div>
			</div>
		</li>
	);
}
