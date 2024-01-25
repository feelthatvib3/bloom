import { Link } from 'react-router-dom';
import { Product } from '../store/features/productsSlice';
import DiscountBadge from './DiscountBadge';

interface ProductCardProps {
    product: Product;
    withAddToCartButton?: boolean;
}

export default function ProductCard({
    product,
    withAddToCartButton,
}: ProductCardProps) {
    const { id, title, price, discont_price, image } = product;
    return (
        <li className="group overflow-hidden rounded-md border border-divider">
            <Link to={`/products/${id}`}>
                {/* image, button, discountBadge */}
                <div className="relative h-[220px] px-4 pb-4 lg:h-[250px]">
                    <img
                        src={`http://localhost:3333${image}`}
                        alt={title}
                        className="absolute left-0 top-0 z-0 h-full w-full object-cover"
                    />
                    {withAddToCartButton && (
                        <button
                            className={`rigth-4 absolute bottom-4 left-4 z-10 flex w-[calc(100%-32px)] items-center justify-center rounded-md bg-accent px-8 py-4 text-xl font-semibold text-white opacity-0 transition-all hover:bg-black group-hover:opacity-100`}
                        >
                            Add to cart
                        </button>
                    )}
                    {discont_price && (
                        <DiscountBadge
                            regularPrice={price}
                            discountPrice={discont_price}
                            className="absolute right-4 top-4"
                        />
                    )}
                </div>
                {/* content */}
                <div className="bordet-t-divider flex flex-col gap-y-3 border-t p-5">
                    <h3 className="overflow-hidden text-ellipsis whitespace-nowrap text-lg font-medium">
                        {title}
                    </h3>
                    {/* price (regular/discount) */}
                    <div className="flex items-end gap-x-3">
                        <span className="text-4xl font-semibold">${price}</span>
                        {discont_price && (
                            <span className="text-lg font-medium text-darkgray line-through">
                                ${discont_price}
                            </span>
                        )}
                    </div>
                </div>
            </Link>
        </li>
    );
}