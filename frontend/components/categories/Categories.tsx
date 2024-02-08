'use client';

import { FC } from 'react';

import Title from '@/components/Title';
import Button from '@/components/Button';
import Container from '@/components/Container';
import CategoryCarousel from '@/components/categories/CategoriesCarousel';

const Categories: FC = () => {
	return (
		<section className="bg-lime-950 py-8 text-lime-100">
			<Container className="lg:flex lg:items-center lg:gap-x-6">
				<div>
					<Title text="Variety of Products" />
					<p className="mt-4 lg:text-lg">
						Explore our comprehensive selection of garden and tools categories,
						thoughtfully curated to enhance your gardening experience.
					</p>
					<Button
						label="Check all"
						onClick={() => console.log(1)}
						className="mt-4 hidden lg:block"
					/>
				</div>
				<div className="mt-4">
					<CategoryCarousel />
				</div>
			</Container>
		</section>
	);
};

export default Categories;
