import { MouseEvent } from 'react';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline';
import { BookmarkIcon as BookmarkIconSolid } from '@heroicons/react/24/solid';
import { BookmarkIcon as BookmarkIconOutline } from '@heroicons/react/24/outline';

import { toast } from 'sonner';

import {
	addToBookmarks,
	removeFromBookmarks,
} from '@/store/slices/bookmarks-slice';
import { RootState } from '@/store/store';
import { Product } from '@/store/slices/products-slice';
import { useAppDispatch, useAppSelector } from '@/lib/redux-hooks';

interface BookmarkButtonProps {
	product: Product;
	primaryBtn?: boolean;
}

export default function BookmarkButton({
	product,
	primaryBtn,
}: BookmarkButtonProps) {
	const { products } = useAppSelector((state: RootState) => state.bookmarks);
	const dispatch = useAppDispatch();
	const isBookmarked = products.find(
		(existingProduct) => existingProduct.id === product.id,
	);

	const handleAddToBookmarks = (
		e: MouseEvent<HTMLButtonElement>,
		product: Product,
	) => {
		e.stopPropagation();
		if (isBookmarked) {
			dispatch(removeFromBookmarks(product.id));
			toast(`${product.name} has been removed from your bookmarks.`, {
				icon: <BookmarkIconOutline className="h-5 w-5" />,
			});
		} else {
			dispatch(addToBookmarks(product));
			toast(`${product.name} has been bookmarked.`, {
				icon: <BookmarkIconSolid className="h-5 w-5" />,
			});
		}
	};
	return (
		<button
			onClick={(e) => handleAddToBookmarks(e, product)}
			className={`group flex shrink-0 items-center justify-center bg-lime-200 p-2 text-lime-950 ${primaryBtn ? 'w-full gap-x-2 border border-lime-200 text-lg font-medium transition-colors hover:bg-transparent hover:text-lime-200' : 'w-[15%] lg:w-[20%]'}`}
		>
			{isBookmarked ? (
				<HeartIconSolid className="h-6 w-6" />
			) : (
				<HeartIconOutline className="h-6 w-6" />
			)}
			{primaryBtn && <span>Remove from bookmarks</span>}
		</button>
	);
}
