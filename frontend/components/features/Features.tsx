import type { Feature } from '@/app/lib/definitions';

import Title from '@/components/Title';
import Container from '@/components/Container';
import FeaturesItem from '@/components/features/FeaturesItem';

import { features } from '@/public/data/features';

export default function Features() {
	return (
		<section id="features" className="py-6 md:py-10 lg:py-14">
			<Container>
				<Title className="mb-4 text-center">Your Garden, Our Commitment</Title>
				<p className="mb-4 text-center text-lg font-medium md:mb-8">
					Elevate your space with us – because your garden deserves
					extraordinary, not ordinary.
				</p>
				<ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
					{features.map((feature: Feature) => (
						<FeaturesItem key={feature.id} feature={feature} />
					))}
				</ul>
			</Container>
		</section>
	);
}
