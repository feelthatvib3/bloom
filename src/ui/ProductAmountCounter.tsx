import { useState } from 'react';

export default function ProductAmountCounter() {
    const [productAmount, setProductAmount] = useState<number>(1);

    const handleIncreaseAmountButton = () =>
        setProductAmount(productAmount + 1);

    const handleDecreaseAmountButton = () => {
        if (productAmount === 1) {
            return;
        } else {
            setProductAmount(productAmount - 1);
        }
    };
    return (
        <div className="flex">
            <button
                onClick={handleDecreaseAmountButton}
                className="z-10 flex w-[47px] items-center justify-center rounded-md border border-divider bg-white"
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
                className="z-10 flex w-[47px] -translate-x-4 items-center justify-center rounded-md border border-divider bg-white"
            >
                <span className="h-[2px] w-4 translate-x-1/2 rounded-full bg-darkgray"></span>
                <span className="h-[2px] w-4 -translate-x-1/2 rotate-90 rounded-full bg-darkgray"></span>
            </button>
        </div>
    );
}
