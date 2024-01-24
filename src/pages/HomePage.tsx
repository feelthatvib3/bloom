import Container from '../components/Container';
import Button from '../components/Button';
import Title from '../ui/Title';
import { RootState, useAppDispatch, useAppSelector } from '../store/index';
import { useEffect } from 'react';
import { Category, fetchCategories } from '../store/features/categoriesSlice';
import DiscountBanner from '../components/DiscountBanner';
import { Product, fetchProducts } from '../store/features/productsSlice';
import ProductCard from '../components/ProductCard';
import NavigationButton from '../ui/NavigationButton';
import CategoryCard from '../components/CategoryCard';

export default function HomePage() {
    const { categories } = useAppSelector(
        (state: RootState) => state.categories,
    );
    const slicedCategories = categories.slice(0, 4);

    const { products } = useAppSelector((state: RootState) => state.products);
    const slicedProducts = products
        .filter((product: Product) => product.discont_price)
        .slice(0, 4);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchProducts());
    }, []);
    return (
        <main>
            <section className="h-[600px] bg-hero-pattern bg-center">
                <Container className="text-white">
                    <h1 className="max-w-[1050px] pb-6 pt-[50px] text-[52px] font-bold leading-[110%] md:text-6xl lg:pb-10 lg:pt-[60px] lg:text-[68px] xl:text-[90px] 2xl:pt-[80px] 2xl:text-[96px]">
                        Amazing Discounts on Garden Products!
                    </h1>
                    <Button>Check out!</Button>
                </Container>
            </section>
            <section className="py-14 lg:py-[60px] 2xl:py-20">
                <Container>
                    <Title
                        text="Categories"
                        link={{ href: '/categories', text: 'All categories' }}
                    />
                    <ul className="mt-6 grid place-items-stretch gap-y-5 md:grid-cols-2 md:gap-x-5 lg:mt-8 xl:grid-cols-4">
                        {slicedCategories.map((category: Category) => (
                            <CategoryCard category={category} />
                        ))}
                    </ul>
                    <NavigationButton
                        text="All categories"
                        href="/categories"
                        className="mx-auto mt-6 max-w-fit py-3 md:hidden"
                    />
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
                        {slicedProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </ul>
                    <NavigationButton
                        text="All sales"
                        href="/sales"
                        className="mx-auto mt-6 max-w-fit py-3 md:hidden"
                    />
                </Container>
            </section>
        </main>
    );
}
