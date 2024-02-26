import { ROOT_URL } from '@/app/lib/constants';

import Title from '@/app/ui/Title';
import Container from '@/app/ui/Container';
import ProductList from '@/app/ui/ProductsList';
import ProductsFilter from '@/app/ui/ProductsFilter';

export default function ProductsPage() {
	const endpoint = `${ROOT_URL}/products/all`;
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
