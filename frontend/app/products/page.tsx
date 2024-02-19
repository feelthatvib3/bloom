import Title from '@/components/Title';
import Container from '@/components/Container';
import ProductList from '@/components/ProductsList';

export default function ProductsPage() {
	return (
		<Container className="pb-4 pt-[calc(1rem+69px)] lg:pb-8 lg:pt-[calc(2rem+69px)]">
			<Title>All products</Title>
			<ProductList filterType="all" />
		</Container>
	);
}
