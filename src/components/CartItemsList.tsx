import { CartProduct } from '../store/features/cartSlice';
import CartItem from './CartItem';

interface CartItemsProps {
    products: CartProduct[];
}

export default function CartItemsList({ products }: CartItemsProps) {
    return (
        <ul className="grid place-content-start gap-y-3 2xl:col-span-3 2xl:gap-y-4">
            {products.map((product: CartProduct) => (
                <CartItem key={product.id} product={product} />
            ))}
        </ul>
    );
}
