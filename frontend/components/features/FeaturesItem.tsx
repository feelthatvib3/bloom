import { type Feature } from '@/public/data/features';

interface FeaturesItemProps {
	feature: Feature;
}

export default function FeaturesItem({ feature }: FeaturesItemProps) {
	const { title, description, icon: FeatureIcon } = feature;
	return (
		<article className="group relative flex cursor-default flex-col justify-center p-6 text-center text-lime-200 lg:col-span-3 lg:justify-end lg:p-8 lg:text-start lg:first:col-span-4 lg:last:col-span-4">
			{/* image */}
			<img
				src="/images/overlay.jpg"
				alt=""
				role="presentation"
				className="absolute left-0 top-0 -z-20 h-full w-full object-cover"
			/>

			{/* overlay */}
			<div className="absolute left-0 top-0 -z-10 h-full w-full bg-lime-950/80 backdrop-blur-xl transition-colors group-hover:bg-lime-200/70"></div>

			{/* content */}
			<div className="group-hover:text-lime-950">
				<h3 className="mb-4 text-3xl transition-colors md:text-4xl">{title}</h3>
				<p className="text-lg font-medium transition-colors">{description}</p>
			</div>
		</article>
	);
}
