import Title from '@/components/Title';
import Container from '@/components/Container';
import ProductList from '@/components/ProductsList';
import ProductsFilter from '@/components/ProductsFilter';

import { ROOT_URL } from '@/store/store';

export default function ProductsPage() {
	const endpoint = ROOT_URL + 'products/all';
	return (
		<Container className="pb-4 pt-[calc(1rem+69px)] lg:pb-8 lg:pt-[calc(2rem+69px)]">
			<Title>All products</Title>
			<div className="mb-8 mt-6">
				<ProductsFilter endpoint={endpoint} />
			</div>
			<ProductList />
		</Container>
	);
}
