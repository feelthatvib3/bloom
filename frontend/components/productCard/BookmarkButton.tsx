import { MouseEvent } from 'react';
import { HeartIcon } from '@heroicons/react/24/outline';
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
}

export default function BookmarkButton({ product }: BookmarkButtonProps) {
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
			className="group flex w-[15%] shrink-0 items-center justify-center bg-lime-200 p-2 text-lime-950 lg:w-[20%]"
		>
			<HeartIcon
				className={`h-6 w-6 ${isBookmarked ? 'fill-lime-950' : 'fill-none'}`}
			/>
		</button>
	);
}
