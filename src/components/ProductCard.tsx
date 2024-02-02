import { Link } from 'react-router-dom';
import { Product } from '../store/features/productsSlice';
import DiscountBadge from './ui/DiscountBadge';
import Button from './ui/Button';
import { addToCart } from '../store/features/cartSlice';
import { MouseEvent, useState } from 'react';
import { useAppDispatch } from '../store';

interface ProductCardProps {
    product: Product;
    withAddToCartButton?: boolean;
}

export default function ProductCard({
    product,
    withAddToCartButton,
}: ProductCardProps) {
    const [isProductAdded, setIsProductAdded] = useState<boolean>(false);
    const { id, title, price, discont_price, image } = product;
    const dispatch = useAppDispatch();

    const addProductToCart = (
        event: MouseEvent<HTMLButtonElement>,
        product: Product,
    ) => {
        event.preventDefault();
        dispatch(addToCart({ product, count: 1 }));
        setIsProductAdded(true);
        const timeoutId = setTimeout(() => {
            setIsProductAdded(false);
        }, 2 * 1000);
    };
    return (
        <li className="group overflow-hidden rounded-md border border-divider">
            <Link to={`/products/${id}`}>
                {/* image, button, discountBadge */}
                <div className="relative h-[220px] overflow-hidden px-4 pb-4 lg:h-[250px] 2xl:h-[285px]">
                    <img
                        src={`http://localhost:3333${image}`}
                        alt={title}
                        className="absolute left-0 top-0 z-0 h-full w-full object-cover"
                    />
                    {withAddToCartButton && (
                        <Button
                            disabled={isProductAdded}
                            className={`rigth-4 absolute bottom-4 left-4 z-10 w-[calc(100%-32px)] translate-y-16 border border-accent opacity-0 hover:border-black disabled:cursor-not-allowed group-hover:translate-y-0 group-hover:opacity-100 ${isProductAdded && 'border-black bg-white !text-black hover:bg-white'}`}
                            onClick={(event) =>
                                addProductToCart(event, product)
                            }
                        >
                            {isProductAdded ? 'Added' : 'Add to cart'}
                        </Button>
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
