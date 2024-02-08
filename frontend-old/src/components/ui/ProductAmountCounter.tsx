import { Dispatch, SetStateAction } from 'react';
import { useAppDispatch } from '../../store';
import {
    decreaseProductCount,
    increaseProductCount,
    updateProductsAmount,
} from '../../store/features/cartSlice';

interface ProductAmountCounterProps {
    productAmount: number;
    setProductAmount: Dispatch<SetStateAction<number>>;
    productId?: number;
}

export default function ProductAmountCounter({
    productId,
    productAmount,
    setProductAmount,
}: ProductAmountCounterProps) {
    const dispatch = useAppDispatch();

    const handleIncreaseAmountButton = () => {
        if (productId) {
            dispatch(increaseProductCount(productId));
            dispatch(updateProductsAmount());
            setProductAmount(productAmount + 1);
        } else {
            setProductAmount(productAmount + 1);
        }
    };

    const handleDecreaseAmountButton = () => {
        if (productId) {
            dispatch(decreaseProductCount(productId));
            dispatch(updateProductsAmount());
            setProductAmount(productAmount - 1);
        } else {
            setProductAmount(productAmount - 1);
        }
    };
    return (
        <div className="flex">
            <button
                disabled={productAmount === 1}
                onClick={handleDecreaseAmountButton}
                className="z-10 flex w-[47px] items-center justify-center rounded-md border border-divider bg-white transition-colors hover:bg-lightgray disabled:cursor-not-allowed disabled:bg-lightgray"
            >
                <span className="h-[2px] w-4 rounded-full bg-darkgray"></span>
            </button>
            <input
                className="no-spinner z-0 max-w-[70px] -translate-x-2 rounded-md border border-divider bg-white px-3 py-3 text-center text-lg font-semibold focus:outline-none"
                min={1}
                value={productAmount}
                type="number"
                readOnly
            />
            <button
                onClick={handleIncreaseAmountButton}
                className="z-10 flex w-[47px] -translate-x-4 items-center justify-center rounded-md border border-divider bg-white transition-colors hover:bg-lightgray"
            >
                <span className="h-[2px] w-4 translate-x-1/2 rounded-full bg-darkgray"></span>
                <span className="h-[2px] w-4 -translate-x-1/2 rotate-90 rounded-full bg-darkgray"></span>
            </button>
        </div>
    );
}
