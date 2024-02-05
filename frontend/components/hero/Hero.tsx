'use client';

import Container from '@/components/Container';
import Button from '@/components/Button';

const Hero: React.FC = () => {
	return (
		<header className="h-screen max-w-screen-2xl xl:mx-auto xl:flex xl:gap-x-4 xl:p-4">
			<div className="h-full xl:w-1/3 xl:bg-lime-100">
				<div className="flex h-full flex-col justify-center p-4 xl:p-0">
					<div className="mb-6 h-full max-h-[600px] overflow-hidden rounded-xl xl:hidden">
						<img
							src="/images/hero-background.jpg"
							alt="Green leaves beside brown wooden rolling pin"
							className="h-full w-full object-cover"
						/>
					</div>
					<h1 className="mb-4 text-5xl font-light">
						Blooms &amp; Tools Extravaganza
					</h1>
					<p className="mb-6 text-lg">
						Immerse yourself in a world of lush possibilities with our premium
						garden goods and tools. Elevate your green haven with handpicked
						essentials for every gardening enthusiast.
					</p>
					<div className="xl:w-60">
						<Button label="Explore now" onClick={() => console.log(0)}></Button>
					</div>
				</div>
			</div>
			<div className="hidden p-4 xl:block xl:h-full xl:w-2/3 xl:rounded-[28px] xl:bg-lime-400">
				<div className="mb-6 h-full overflow-hidden rounded-xl">
					<img
						src="/images/hero-background.jpg"
						alt="Green leaves beside brown wooden rolling pin"
						className="h-full w-full object-cover blur"
					/>
				</div>
			</div>
		</header>
	);
};

export default Hero;

// pt-[calc(2rem+66px)]
