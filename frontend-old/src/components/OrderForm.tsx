import { useState } from 'react';
import { RootState, useAppDispatch, useAppSelector } from '../store';
import Button from './ui/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { clearCart } from '../store/features/cartSlice';

interface Inputs {
    name: string;
    phoneNumber: string;
    email: string;
}

export default function OrderForm() {
    const [isOrderPlaced, setIsOrderPlaced] = useState<boolean>(false);
    const { products, productsTotalPrice } = useAppSelector(
        (state: RootState) => state.cart,
    );
    const dispatch = useAppDispatch();
    const uniqueProducts = products.length;
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const response: Response = await fetch(
            'http://localhost:3333/sale/send',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            },
        );
        const { status, message } = await response.json();
        console.log({ status, message });

        if (status === 'OK') {
            dispatch(clearCart());
        }

        setIsOrderPlaced(true);
        setTimeout(() => {
            setIsOrderPlaced(false);
        }, 3000);
        reset();
    };
    const nameInput = register('name', {
        required: 'A name must be provided.',
        pattern: {
            value: /^[A-ZА-Я]/g,
            message: 'A name must start with a capital letter.',
        },
    });
    const phoneNumberInput = register('phoneNumber', {
        required: 'A phone number must be provided.',
        pattern: {
            value: /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/,
            message: 'A valid phone number must be provided.',
        },
    });
    const emailInput = register('email', {
        required: 'You must provide an email.',
        pattern: {
            value: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
            message: 'A valid email address must be provided.',
        },
    });
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="h-fit rounded-xl bg-lightgray px-5 py-6 lg:py-8 2xl:col-span-2 2xl:px-8"
        >
            <div>
                <p className="text-[28px] font-bold lg:text-[32px] xl:text-[40px]">
                    Order details
                </p>
                <div>
                    <p className="text-[28px] font-medium text-darkgray lg:text-[32px] xl:text-[40px]">
                        {uniqueProducts} {uniqueProducts > 1 ? 'items' : 'item'}
                    </p>
                    <p className="flex items-end justify-between">
                        <span className="text-[28px] font-medium text-darkgray lg:text-[32px] xl:text-[40px]">
                            Total
                        </span>
                        <span className="text-[40px] font-bold md:text-5xl lg:text-[56px] xl:text-[64px]">
                            ${productsTotalPrice.toLocaleString()}
                        </span>
                    </p>
                </div>
            </div>
            <div className="mt-5 flex flex-col gap-y-2 lg:gap-y-3 2xl:mt-8 2xl:gap-y-4">
                <input
                    defaultValue=""
                    type="text"
                    placeholder="Name"
                    {...nameInput}
                    className={`w-full rounded-md border border-divider bg-white px-5 py-4 text-lg font-medium text-darkgray placeholder:text-lg placeholder:font-medium placeholder:text-darkgray focus:outline-none lg:text-xl lg:placeholder:text-xl ${errors.name && 'border-2 border-red-400'}`}
                />
                {errors.name && (
                    <span className="font-medium text-red-600">
                        {errors.name.message}
                    </span>
                )}
                <input
                    defaultValue=""
                    type="text"
                    placeholder="Phone number"
                    {...phoneNumberInput}
                    className={`w-full rounded-md border border-divider bg-white px-5 py-4 text-lg font-medium text-darkgray placeholder:text-lg placeholder:font-medium placeholder:text-darkgray focus:outline-none lg:text-xl lg:placeholder:text-xl ${errors.phoneNumber && 'border-2 border-red-400'}`}
                />
                {errors.phoneNumber && (
                    <span className="font-medium text-red-600">
                        {errors.phoneNumber.message}
                    </span>
                )}
                <input
                    defaultValue=""
                    type="email"
                    placeholder="Email"
                    {...emailInput}
                    className={`w-full rounded-md border border-divider bg-white px-5 py-4 text-lg font-medium text-darkgray placeholder:text-lg placeholder:font-medium placeholder:text-darkgray focus:outline-none lg:text-xl lg:placeholder:text-xl ${errors.email && 'border-2 border-red-400'}`}
                />
                {errors.email && (
                    <span className="font-medium text-red-600">
                        {errors.email.message}
                    </span>
                )}
            </div>
            <Button
                type="submit"
                disabled={isOrderPlaced}
                className="mt-5 w-full lg:w-fit xl:w-full 2xl:mt-8"
            >
                {isOrderPlaced ? 'Request submitted' : 'Order'}
            </Button>
        </form>
    );
}
