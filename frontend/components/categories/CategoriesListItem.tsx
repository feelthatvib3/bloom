import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

import { Category } from '@/store/slices/categories-slice';
import { ROOT_URL } from '@/store/store';

interface CategoriesListItemProps {
	category: Category;
}

export default function CategoriesListItem({
	category,
}: CategoriesListItemProps) {
	const { image, slug, title, description } = category;
	return (
		<li className="categories-list-item group relative">
			<Link href={`/categories/${slug}`} className="flex h-full items-end p-6">
				{/* background image */}
				<img
					src={ROOT_URL + image}
					alt={`${title} category`}
					className="absolute left-0 top-0 -z-20 h-full w-full object-cover"
				/>

				{/* overlay */}
				<div className="absolute left-0 top-0 -z-10 h-full w-full bg-lime-950/80 backdrop-blur-lg transition-colors group-hover:bg-lime-200/70"></div>

				{/* icon */}
				<ArrowUpRightIcon className="absolute right-4 top-4 h-6 w-6 text-lime-950 opacity-0 transition-opacity group-hover:opacity-100" />

				{/* content */}
				<div className="flex flex-col gap-y-4">
					<h3 className="text-3xl text-lime-200 transition-colors group-hover:text-lime-950 md:text-4xl">
						{title}
					</h3>
					<p className="max-w-5xl text-lg font-medium text-lime-200 transition-colors group-hover:text-lime-950">
						{description}
					</p>
				</div>
			</Link>
		</li>
	);
}
