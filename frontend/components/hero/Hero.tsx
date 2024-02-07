'use client';

import Container from '@/components/Container';
import Button from '@/components/Button';

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
	type IHeroCarouselItem,
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
		<header className="relative flex h-screen items-center justify-center pt-[60px]">
			<div className="absolute left-0 top-0 -z-10 h-[200px] w-full bg-lime-950 lg:h-full lg:w-2/5"></div>
			<Container className="flex !max-w-3xl flex-col items-center justify-center gap-y-2 lg:!max-w-screen-2xl lg:flex-row lg:gap-x-8">
				{/* carousel + carousel slides counter */}
				<div className="shrink-0 lg:w-1/2">
					<Carousel
						setApi={setApi}
						className="h-[320px] md:h-[640px] xl:h-[800px]"
					>
						<CarouselContent className="h-full p-0">
							{heroCarouselItems.map(
								({ id, imageSrc, imageDescription }: IHeroCarouselItem) => (
									<CarouselItem key={id} className="h-full">
										<img
											src={imageSrc}
											alt={imageDescription}
											className="h-full w-full object-cover"
										/>
									</CarouselItem>
								),
							)}
						</CarouselContent>
						<div className="absolute bottom-0 left-0 flex">
							<CarouselPrevious className="static h-10 w-10 translate-y-0 rounded-none border-none bg-lime-100 hover:bg-lime-200 xl:h-14 xl:w-14" />
							<CarouselNext className="static h-10 w-10 translate-y-0 rounded-none border-none bg-lime-100 hover:bg-lime-200 xl:h-14 xl:w-14" />
						</div>
					</Carousel>
					<div className="mt-2">
						<CarouselSlidesCounter
							currentSlideIndex={current}
							totalSlides={count}
						/>
					</div>
				</div>
				{/* content */}
				<div className="flex flex-col gap-y-3 lg:w-1/2 xl:gap-y-6">
					<h1 className="text-4xl text-lime-950 lg:text-7xl xl:text-8xl">
						Explore Garden Treasures
					</h1>
					<p className="xl:text-lg">
						Immerse yourself in a world of lush possibilities with our premium
						garden goods and tools.{' '}
						<span className="hidden md:inline">
							Elevate your green haven with handpicked essentials for every
							gardening enthusiast.
						</span>
					</p>
					<Button
						label="Explore now"
						onClick={() => console.log(1)}
						className="px-10 lg:!w-fit"
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
