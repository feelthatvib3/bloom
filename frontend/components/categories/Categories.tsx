'use client';

import { useRouter } from 'next/navigation';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

import Title from '@/components/Title';
import Button from '@/components/Button';
import Container from '@/components/Container';
import CategoryCarousel from '@/components/categories/CategoriesCarousel';

export default function Categories() {
	const router = useRouter();
	return (
		<section id="categories" className="py-8 lg:py-14">
			<Container className="flex max-w-3xl flex-col gap-y-3 md:items-center md:gap-x-4 lg:max-w-screen-xl lg:flex-row lg:gap-x-8 xl:gap-x-14">
				<div className="lg:2/5 flex flex-col gap-y-3 lg:gap-y-5">
					<Title text="Variety of Products" className="text-lime-950" />
					<p className="xl:text-lg">
						Explore our comprehensive selection of garden and tools categories,
						thoughtfully curated to enhance your gardening experience.
					</p>
					<Button
						label="See all categories"
						icon={<ArrowUpRightIcon className="h-5 w-5" />}
						onClick={() => router.push('/categories')}
						className="hidden !w-fit lg:flex"
					/>
				</div>
				<div className="shrink-0 lg:w-3/5">
					<CategoryCarousel />
				</div>
				<Button
					label="See all categories"
					icon={<ArrowUpRightIcon className="h-5 w-5" />}
					onClick={() => router.push('/categories')}
					className="lg:hidden"
				/>
			</Container>
		</section>
	);
}
