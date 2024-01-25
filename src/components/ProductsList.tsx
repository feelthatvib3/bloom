import { useEffect } from 'react';
import {
    fetchAllProducts,
    fetchDiscountedProducts,
    fetchProductsByCategoryId,
} from '../store/features/productsSlice';
import ProductCard from '../ui/ProductCard';
import { RootState, useAppDispatch, useAppSelector } from '../store';
import { useLocation, useParams } from 'react-router-dom';

interface ProductsListProps {
    type: 'category' | 'products' | 'sales';
}

export default function ProductsList({ type }: ProductsListProps) {
    const { products } = useAppSelector((state: RootState) => state.products);
    const dispatch = useAppDispatch();
    const { categoryId } = useParams();
    const { pathname } = useLocation();
    useEffect(() => {
        if (type === 'products') {
            dispatch(fetchAllProducts());
        } else if (type === 'category') {
            dispatch(fetchProductsByCategoryId(categoryId!));
        } else if (type === 'sales') {
            dispatch(fetchDiscountedProducts());
        }
    }, [pathname]);
    return (
        <ul className="mt-6 grid gap-5 md:grid-cols-2 lg:mt-8 xl:grid-cols-4 2xl:mt-10 2xl:gap-8">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    withAddToCartButton
                />
            ))}
        </ul>
    );
}
