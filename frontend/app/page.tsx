import { FC } from 'react';

import Hero from '@/components/hero/Hero';
import NewDiscounted from '@/components/newDiscounted/NewDiscounted';

const Home: FC = () => {
	return (
		<main>
			<Hero />
			<NewDiscounted />
		</main>
	);
};

export default Home;
