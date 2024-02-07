'use client';

import Container from '@/components/Container';
import Button from '@/components/Button';
import Menu from '../navbar/Menu';

import { type CarouselApi } from '@/components/ui/carousel';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { useEffect, useState } from 'react';
import CarouselSlidesCounter from './CarouselSlidesCounter';

import {
	type HeroCarouselItem,
	heroCarouselItems,
} from '@/data/heroCarouselItems';
import Image from 'next/image';

const Hero: React.FC = () => {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState<number>(0);
	const [count, setCount] = useState<number>(0);

	useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on('select', () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);
	return (
		<header className="relative flex h-screen max-w-[1920px] pb-[9999px] pt-[calc(2rem+52px)]">
			<div className="absolute left-0 top-0 -z-10 h-[250px] w-full bg-lime-950 xl:h-full xl:w-2/5"></div>
			<Container>
				<Carousel setApi={setApi}>
					<CarouselContent className="p-0">
						{heroCarouselItems.map((item: HeroCarouselItem) => (
							<CarouselItem key={item.id}>
								<img
									src={item.imageSrc}
									alt={item.imageDescription}
									className="h-full w-full object-cover"
								/>
							</CarouselItem>
						))}
					</CarouselContent>
					<div className="absolute bottom-0 left-0 flex">
						<CarouselPrevious className="static translate-y-0 rounded-none border-none bg-lime-100" />
						<CarouselNext className="static translate-y-0 rounded-none border-none bg-lime-100" />
					</div>
				</Carousel>
				<div className="mt-2">
					<CarouselSlidesCounter
						currentSlideIndex={current}
						totalSlides={count}
					/>
				</div>
			</Container>
		</header>
	);
};

// Explore Garden Treasures
// Immerse yourself in a world of lush possibilities with our premium
// 						garden goods and tools. Elevate your green haven with handpicked
// 						essentials for every gardening enthusiast.

export default Hero;

// pt-[calc(2rem+66px)]
