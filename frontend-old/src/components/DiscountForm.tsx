import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from './ui/Button';

interface Inputs {
    name: string;
    phoneNumber: string;
    email: string;
}

export default function DiscountForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Inputs>();
    const [isDiscountRequestSent, setIsDiscountRequestSent] =
        useState<boolean>(false);
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
        const responseData = await response.json();
        console.log(responseData);

        setIsDiscountRequestSent(true);
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
            className="flex flex-col gap-y-2 lg:flex-grow xl:max-w-[500px]"
        >
            <input
                defaultValue=""
                type="text"
                placeholder="Name"
                {...nameInput}
                className={`rounded-md border border-white bg-transparent px-5 py-3 text-lg font-medium text-white placeholder:text-lg placeholder:font-medium placeholder:text-white focus:outline-none ${errors.name && 'border-2'}`}
            />
            <input
                defaultValue=""
                type="text"
                placeholder="Phone number"
                {...phoneNumberInput}
                className={`rounded-md border border-white bg-transparent px-5 py-3  text-lg font-medium text-white placeholder:text-lg placeholder:font-medium placeholder:text-white focus:outline-none ${errors.phoneNumber && 'border-2'}`}
            />
            <input
                defaultValue=""
                type="email"
                placeholder="Email"
                {...emailInput}
                className={`rounded-md border border-white bg-transparent px-5 py-3  text-lg font-medium text-white placeholder:text-lg placeholder:font-medium placeholder:text-white focus:outline-none ${errors.email && 'border-2'}`}
            />
            <Button
                intent="banner"
                className={`${isDiscountRequestSent ? 'bg-transparent text-white' : 'bg-white text-black hover:bg-black hover:text-white'} mt-5`}
                type="submit"
                disabled={isDiscountRequestSent}
            >
                {isDiscountRequestSent ? 'Request submitted' : 'Get a discount'}
            </Button>
        </form>
    );
}
