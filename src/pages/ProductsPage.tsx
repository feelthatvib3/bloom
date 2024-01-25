import Container from '../components/Container';
import { RootState, useAppSelector } from '../store';
import Breadcrumb from '../ui/Breadcrumb';
import Title from '../ui/Title';
import ProductsList from '../components/ProductsList';

interface ProductsPageProps {
    type: 'category' | 'products' | 'sales';
}

export default function ProductsPage({ type }: ProductsPageProps) {
    const { categoryTitle } = useAppSelector(
        (state: RootState) => state.products,
    );
    return (
        <main className="pt-8 xl:pt-10">
            <Container>
                <Breadcrumb />
                <div className="mt-8 xl:mt-10"></div>
                <Title text={categoryTitle} />
                <ProductsList type={type} />
            </Container>
        </main>
    );
}
