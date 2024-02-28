import type { Dispatch, SetStateAction } from 'react';
import type { CartProduct } from '@/app/lib/definitions';

import { z } from 'zod';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
	CursorArrowRaysIcon,
	ExclamationTriangleIcon,
	ShieldCheckIcon,
} from '@heroicons/react/24/solid';

import { cn } from '@/app/lib/utils';
import { ROOT_URL } from '@/app/lib/constants';

import Button from '@/app/ui/Button';

import { clearCart } from '@/store/slices/cart-slice';
import { useAppDispatch } from '@/app/lib/redux-hooks';

const schema = z.object({
	name: z.string().min(2).max(50),
	surname: z.string().min(2).max(50),
	email: z.string().email(),
});

type FormFields = z.infer<typeof schema>;

interface CheckoutForm {
	order: CartProduct[];
	setIsModalOpened: Dispatch<SetStateAction<boolean>>;
}

export default function CheckoutForm({
	order,
	setIsModalOpened,
}: CheckoutForm) {
	const dispatch = useAppDispatch();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<FormFields>({
		resolver: zodResolver(schema),
	});

	const onSubmit: SubmitHandler<FormFields> = async () => {
		try {
			const response = await fetch(`${ROOT_URL}/order/new`, {
				method: 'POST',
				body: JSON.stringify(order),
			});
			const responseData = await response.json();
			const responseMessage = responseData.message;

			if (!response.ok) {
				throw new Error(responseMessage);
			}

			dispatch(clearCart());
			toast(`${responseMessage}.`, {
				icon: <ShieldCheckIcon />,
			});
		} catch (error: any) {
			const errorMessage = error.message;
			toast(`${errorMessage}.`, {
				icon: <ExclamationTriangleIcon />,
			});
		} finally {
			setIsModalOpened(false);
			reset();
		}
	};
	return (
		<form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
			<div className="space-y-1">
				<label className="text-lg font-medium">Name</label>
				<input
					{...register('name')}
					type="text"
					placeholder="John"
					className={cn(
						'w-full border bg-transparent px-4 py-2 text-lg outline-none placeholder:text-lime-950/60',
						errors.name
							? 'border-red-500 text-red-500 placeholder:text-red-500'
							: 'border-lime-950',
					)}
				/>
				{errors.name && (
					<div className="text-red-500">{errors.name.message}</div>
				)}
			</div>
			<div className="space-y-1">
				<label className="text-lg font-medium">Surname</label>
				<input
					{...register('surname')}
					type="text"
					placeholder="Doe"
					className={cn(
						'w-full border bg-transparent px-4 py-2 text-lg outline-none placeholder:text-lime-950/60',
						errors.name
							? 'border-red-500 text-red-500 placeholder:text-red-500'
							: 'border-lime-950',
					)}
				/>
				{errors.surname && (
					<div className="text-red-500">{errors.surname.message}</div>
				)}
			</div>
			<div className="space-y-1">
				<label className="text-lg font-medium">Email</label>
				<input
					{...register('email')}
					type="text"
					placeholder="example@email.com"
					className={cn(
						'w-full border bg-transparent px-4 py-2 text-lg outline-none placeholder:text-lime-950/60',
						errors.name
							? 'border-red-500 text-red-500 placeholder:text-red-500'
							: 'border-lime-950',
					)}
				/>
				{errors.email && (
					<div className="text-red-500">{errors.email.message}</div>
				)}
			</div>
			<Button
				disabled={isSubmitting}
				type="submit"
				label="Confirm"
				className="!mt-4 text-xl"
				icon={<CursorArrowRaysIcon className="h-6 w-6" />}
				iconPosition="left"
			/>
		</form>
	);
}
