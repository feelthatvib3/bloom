import { useState } from 'react';
import { useAppDispatch } from '../../store';
import {
    CartProduct,
    removeProductFromCart,
} from '../../store/slices/cartSlice';
import ProductAmountCounter from './ProductAmountCounter';
import XButton from './XButton';

interface CartItemProps {
    product: CartProduct;
}

export default function CartItem({ product }: CartItemProps) {
    const [productAmount, setProductAmount] = useState<number>(
        product.amountAdded,
    );
    const dispatch = useAppDispatch();
    return (
        <li className="flex h-fit items-center overflow-hidden rounded-xl border border-divider">
            {/* image */}
            <div className="max-h-[220px] w-1/3 border-r border-r-divider md:w-2/4">
                <img
                    src={`http://localhost:3333${product.image}`}
                    alt={product.title}
                    className="h-full w-full object-cover"
                />
            </div>
            {/* content */}
            <div className="flex w-2/3 flex-col gap-y-3 p-5 md:w-3/4 2xl:gap-y-8 2xl:p-8">
                <div className="flex items-start justify-between gap-x-3">
                    <p className="line-clamp-2 text-lg font-medium lg:text-xl">
                        {product.title}
                    </p>
                    <XButton
                        className="shrink-0"
                        onClick={() =>
                            dispatch(removeProductFromCart(product.id))
                        }
                    />
                </div>
                <div className="flex flex-col gap-y-3 lg:flex-row lg:items-center lg:gap-x-1 xl:flex-col xl:items-start 2xl:flex-row 2xl:items-center 2xl:gap-x-3">
                    <ProductAmountCounter
                        productAmount={productAmount}
                        setProductAmount={setProductAmount}
                        productId={product.id}
                    />
                    <div className="flex items-end gap-x-3">
                        <span className="text-4xl font-semibold">
                            $
                            {product.discont_price
                                ? product.discont_price
                                : product.price}
                        </span>
                        {product.discont_price && (
                            <span className="text-lg font-medium text-darkgray line-through">
                                ${product.price}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </li>
    );
}
