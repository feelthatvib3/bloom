import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import { FC } from 'react';

interface CarouselSlidesCounterProps {
	currentSlideIndex: number;
	totalSlides: number;
}

const CarouselSlidesCounter: FC<CarouselSlidesCounterProps> = ({
	currentSlideIndex,
	totalSlides,
}) => {
	return (
		<div className="flex items-center gap-x-4">
			<span className="">{currentSlideIndex.toString().padStart(2, '0')}</span>
			<ArrowLongRightIcon className="h-4 w-4" />
			<span
				className={`${currentSlideIndex < totalSlides ? 'text-black/50' : 'text-black'} transition-colors`}
			>
				{totalSlides.toString().padStart(2, '0')}
			</span>
		</div>
	);
};

export default CarouselSlidesCounter;
