import type { Category } from '@/app/lib/definitions';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

import { ROOT_URL } from '@/app/lib/constants';

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
				<Image
					src={`${ROOT_URL}/${image}`}
					alt={`${title} category`}
					className="absolute left-0 top-0 -z-20 h-full w-full object-cover lg:hidden"
					width={735}
					height={350}
					quality={0}
				/>
				<Image
					src={`${ROOT_URL}/${image}`}
					alt={`${title} category`}
					className="absolute left-0 top-0 -z-20 hidden h-full w-full object-cover lg:block"
					width={1250}
					height={400}
					quality={0}
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
