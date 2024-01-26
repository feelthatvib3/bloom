import { useEffect } from 'react';
import Container from '../components/Container';
import Title from '../ui/Title';
import { RootState, useAppDispatch, useAppSelector } from '../store';
import { Category, fetchCategories } from '../store/features/categoriesSlice';
import CategoryCard from '../components/CategoryCard';
import Breadcrumb from '../ui/Breadcrumb';

export default function CategoriesPage() {
    const { categories } = useAppSelector(
        (state: RootState) => state.categories,
    );
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchCategories());
    }, []);
    return (
        <main>
            <section className="pt-8 xl:pt-10">
                <Container>
                    <Breadcrumb />
                    <div className="lg:mt-8 xl:mt-10"></div>
                    <Title text="Categories" />
                    <ul className="mt-6 grid gap-5 md:grid-cols-2 lg:mt-8 xl:grid-cols-3 2xl:mt-10 2xl:grid-cols-5 2xl:gap-[30px]">
                        {categories.map((category: Category) => (
                            <CategoryCard
                                key={category.id}
                                category={category}
                            />
                        ))}
                    </ul>
                </Container>
            </section>
        </main>
    );
}
