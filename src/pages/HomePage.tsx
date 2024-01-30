import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../components/layout/Container';
import Button from '../components/ui/Button';
import Title from '../components/ui/Title';
import { RootState, useAppDispatch, useAppSelector } from '../store/index';
import { Category, fetchCategories } from '../store/features/categoriesSlice';
import DiscountBanner from '../components/layout/DiscountBanner';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import { fetchDiscountedProducts } from '../store/features/productsSlice';

export default function HomePage() {
    const navigate = useNavigate();
    const { categories } = useAppSelector(
        (state: RootState) => state.categories,
    );
    const firstFourCategories = categories.slice(0, 4);

    const { products } = useAppSelector((state: RootState) => state.products);
    const firstFourDiscountedProducts = products.slice(0, 4);

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchDiscountedProducts());
    }, []);
    return (
        <main>
            <section className="h-[600px] bg-hero-pattern bg-cover bg-no-repeat">
                <Container className="text-white">
                    <h1 className="max-w-[1050px] pb-6 pt-[50px] text-[52px] font-bold leading-[110%] md:text-6xl lg:pb-10 lg:pt-[60px] lg:text-[68px] xl:text-[90px] 2xl:pt-[80px] 2xl:text-[96px]">
                        Amazing Discounts on Garden Products!
                    </h1>
                    <Button>Check out</Button>
                </Container>
            </section>
            <section className="py-14 lg:py-[60px] 2xl:py-20">
                <Container>
                    <Title
                        text="Categories"
                        link={{ href: '/categories', text: 'All categories' }}
                    />
                    <ul className="mt-6 grid place-items-stretch gap-y-5 md:grid-cols-2 md:gap-x-5 lg:mt-8 xl:grid-cols-4">
                        {firstFourCategories.map((category: Category) => (
                            <CategoryCard category={category} />
                        ))}
                    </ul>
                    <Button
                        intent="link"
                        onClick={() => navigate('/categories')}
                        className="mx-auto mt-6 md:hidden"
                    >
                        All categories
                    </Button>
                </Container>
            </section>
            <section className="pb-14 lg:pb-[60px] 2xl:pb-20">
                <Container>
                    <DiscountBanner />
                </Container>
            </section>
            <section>
                <Container>
                    <Title
                        text="Sale"
                        link={{ href: '/sales', text: 'All sales' }}
                    />
                    <ul className="mt-6 grid gap-y-5 md:grid-cols-2 md:gap-x-5 lg:mt-8 xl:grid-cols-4">
                        {firstFourDiscountedProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </ul>
                    <Button
                        intent="link"
                        onClick={() => navigate('/sales')}
                        className="mx-auto mt-6 md:hidden"
                    >
                        All sales
                    </Button>
                </Container>
            </section>
        </main>
    );
}
