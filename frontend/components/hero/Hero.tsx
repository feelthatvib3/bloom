'use client';

import Button from '@/components/Button';
import Container from '@/components/Container';
import HeroCarousel from '@/components/hero/HeroCarousel';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

const Hero: React.FC = () => {
	return (
		<header className="relative flex h-screen items-center justify-center pt-[60px]">
			<div className="absolute left-0 top-0 -z-10 h-[200px] w-full bg-lime-950 lg:h-full lg:w-2/5"></div>
			<Container className="flex !max-w-3xl flex-col items-center justify-center gap-y-2 lg:!max-w-screen-2xl lg:flex-row lg:gap-x-8">
				{/* carousel */}
				<div className="shrink-0 lg:w-1/2">
					<HeroCarousel />
				</div>
				{/* content */}
				<div className="flex flex-col gap-y-3 lg:w-1/2 lg:gap-y-5">
					<h1 className="text-4xl text-lime-950 lg:text-7xl xl:text-8xl 2xl:text-9xl">
						Explore Garden Treasures
					</h1>
					<p className="lg:max-w-[560px] xl:text-lg">
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
						className="lg:mt-2 lg:!w-fit"
						icon={<ArrowUpRightIcon className="h-5 w-5" />}
					/>
				</div>
			</Container>
		</header>
	);
};

export default Hero;
