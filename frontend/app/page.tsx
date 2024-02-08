import { FC } from 'react';

import Hero from '@/components/hero/Hero';
import Categories from '@/components/categories/Categories';

const Home: FC = () => {
	return (
		<main>
			<Hero />
			<Categories />
		</main>
	);
};

export default Home;
