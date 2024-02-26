import type { Product } from '@/app/lib/definitions';

import Link from 'next/link';
import Image from 'next/image';

import { ROOT_URL } from '@/app/lib/constants';

import ProductPrice from '@/components/productCard/ProductPrice';
import { TrashIcon } from '@heroicons/react/24/solid';
import { useAppDispatch } from '@/app/lib/redux-hooks';
import { removeFromBookmarks } from '@/store/slices/bookmarks-slice';
import { toast } from 'sonner';
import Button from '@/app/ui/Button';

interface BookmarksListItemProps {
	product: Product;
}

export default function BookmarksListItem({ product }: BookmarksListItemProps) {
	const { id, categoryTitle, image, name, price, discount } = product;
	const dispatch = useAppDispatch();

	const handleRemoveFromBookmarks = () => {
		dispatch(removeFromBookmarks(id));
		toast(`${name} is successfully unbookmarked.`);
	};
	return (
		<li className="min-w-xs relative min-h-[450px] cursor-pointer p-4 text-lime-200">
			<Link href={`/products/${id}`}>
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
									intent="secondary"
									label="Unbookmark"
									icon={<TrashIcon className="h-6 w-6" />}
									iconPosition="left"
									onClick={handleRemoveFromBookmarks}
									className="text-xl"
								/>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</li>
	);
}
