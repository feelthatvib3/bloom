import { FC, useEffect, useState } from 'react';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';

import {
	type ICategoriesCarouselItem,
	categoriesCarouselItems,
} from '@/data/categoryCarouselItems';

const CategoryCarousel: FC = ({}) => {
	return (
		<Carousel opts={{ align: 'start' }}>
			<CarouselContent className="h-full">
				{categoriesCarouselItems.map(
					({
						id,
						categoryTitle,
						imageSrc,
						imageDescription,
					}: ICategoriesCarouselItem) => (
						<CarouselItem key={id} className="relative w-full basis-1/2">
							<img
								src={imageSrc}
								alt={imageDescription}
								className="h-full w-full object-cover"
								loading="lazy"
							/>
							<span className="absolute bottom-0 z-10 h-fit w-[calc(100%-1rem)] bg-gradient-to-t from-lime-950/100 via-lime-950/65 to-lime-950/20 p-4 text-xl font-semibold backdrop-blur-md">
								{categoryTitle}
							</span>
						</CarouselItem>
					),
				)}
			</CarouselContent>
		</Carousel>
	);
};

export default CategoryCarousel;
