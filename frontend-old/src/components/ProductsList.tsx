import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { clearProducts } from '../store/slices/productsSlice';
import ProductCard from './ui/ProductCard';
import { RootState, useAppDispatch, useAppSelector } from '../store';
import {
    fetchAllProducts,
    fetchDiscountedProducts,
    fetchProductsByCategoryId,
} from '../store/thunks/productsThunk';

interface ProductsListProps {
    type: 'category' | 'products' | 'sales';
}

export default function ProductsList({ type }: ProductsListProps) {
    const { products } = useAppSelector((state: RootState) => state.products);
    const dispatch = useAppDispatch();
    const { categoryId } = useParams();

    const filteredProducts = products.filter(
        ({ isShown, isShownPrice }) => isShown && isShownPrice,
    );

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
            {filteredProducts.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    withAddToCartButton
                />
            ))}
        </ul>
    );
}
