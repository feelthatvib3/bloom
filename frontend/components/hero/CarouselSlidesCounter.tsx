interface CarouselSlidesCounterProps {
	currentSlideIndex: number;
	totalSlides: number;
}

export default function CarouselSlidesCounter({
	currentSlideIndex,
	totalSlides,
}: CarouselSlidesCounterProps) {
	return (
		<div className="flex items-center gap-x-3">
			<span className="w-6 text-start lg:text-lg lg:text-lime-100">
				{currentSlideIndex.toString().padStart(2, '0')}
			</span>
			<div className="relative h-[1.5px] w-16 rounded-sm bg-lime-950 before:absolute before:-top-[1.5px] before:right-0 before:block before:h-[0.5px] before:w-2 before:rotate-[25deg] before:rounded-sm before:bg-lime-950 after:absolute after:-bottom-[1px] after:right-0 after:block after:h-[0.5px] after:w-2 after:-rotate-[25deg] after:rounded-sm after:bg-lime-950 lg:bg-lime-100 lg:before:bg-lime-100 lg:after:bg-lime-100 xl:w-24"></div>
			<span
				className={`${currentSlideIndex < totalSlides ? 'text-black/50 lg:text-lime-100/50' : 'text-black lg:text-lime-100'} w-6 text-end transition-colors lg:text-lg`}
			>
				{totalSlides.toString().padStart(2, '0')}
			</span>
		</div>
	);
}
