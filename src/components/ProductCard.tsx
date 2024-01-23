import { Product } from '../store/features/productsSlice';
import Discount from './Discount';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const { id, title, price, discont_price, image } = product;
    return (
        <li className="overflow-hidden rounded-xl border border-divider">
            <a href={`/products/${id}`}>
                <div className="relative">
                    <img
                        src={`http://localhost:3333/${image}`}
                        alt={title}
                        className="object-cover"
                    />
                    {discont_price && (
                        <div className="absolute right-4 top-4">
                            <Discount discountValue={discont_price as number} />
                        </div>
                    )}
                </div>
                <div className="flex flex-col gap-y-3 border-t border-t-divider p-5">
                    <h3 className="overflow-hidden text-ellipsis whitespace-nowrap text-lg font-medium">
                        {title}
                    </h3>
                    <div className="flex items-end gap-x-3">
                        <p className="text-4xl font-semibold">${price}</p>
                        {discont_price && (
                            <p className="text-lg font-medium text-darkgray line-through">
                                ${Math.trunc(price / (1 - discont_price / 100))}
                            </p>
                        )}
                    </div>
                </div>
            </a>
        </li>
    );
}
