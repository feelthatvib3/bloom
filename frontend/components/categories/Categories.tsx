'use client';

import { FC } from 'react';

import Title from '@/components/Title';
import Container from '@/components/Container';
import CategoryCarousel from '@/components/categories/CategoriesCarousel';

const Categories: FC = () => {
	return (
		<section className="py-8 lg:py-14">
			<Container className="md:flex md:items-center md:gap-x-4 lg:gap-x-8 xl:gap-x-14">
				<div className="md:1/3">
					<Title text="Variety of Products" className="text-lime-950" />
					<p className="mt-4 lg:mt-5 xl:text-lg">
						Explore our comprehensive selection of garden and tools categories,
						thoughtfully curated to enhance your gardening experience.
					</p>
				</div>
				<div className="mt-4 shrink-0 cursor-grab active:cursor-grabbing md:w-2/3">
					<CategoryCarousel />
				</div>
			</Container>
		</section>
	);
};

export default Categories;
