import { useEffect } from 'react';
import {
    clearProducts,
    fetchAllProducts,
    fetchDiscountedProducts,
    fetchProductsByCategoryId,
} from '../store/features/productsSlice';
import ProductCard from './ProductCard';
import { RootState, useAppDispatch, useAppSelector } from '../store';
import { useParams } from 'react-router-dom';

interface ProductsListProps {
    type: 'category' | 'products' | 'sales';
}

export default function ProductsList({ type }: ProductsListProps) {
    const { products } = useAppSelector((state: RootState) => state.products);
    const dispatch = useAppDispatch();
    const { categoryId } = useParams();

    useEffect(() => {
        if (type === 'products') {
            dispatch(fetchAllProducts());
        } else if (type === 'category' && categoryId) {
            dispatch(fetchProductsByCategoryId(categoryId));
        } else if (type === 'sales') {
            dispatch(fetchDiscountedProducts());
        }

        return () => {
            dispatch(clearProducts());
        };
    }, [type]);
    return (
        <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-4 2xl:gap-8">
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
