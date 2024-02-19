'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
	ExclamationTriangleIcon,
	ShieldCheckIcon,
} from '@heroicons/react/24/solid';

import { toast } from 'sonner';

import { ROOT_URL } from '@/store/store';

const schema = z.object({
	email: z.string().email(),
});

type FormFields = z.infer<typeof schema>;

export default function DiscountForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<FormFields>({
		resolver: zodResolver(schema),
	});

	const onSubmit: SubmitHandler<FormFields> = async (data) => {
		try {
			const response: Response = await fetch(ROOT_URL + 'discount/new', {
				method: 'POST',
				body: JSON.stringify(data.email),
			});
			const responseData = await response.json();
			const responseMessage = responseData.message;

			if (!response.ok) {
				throw new Error(responseMessage);
			}

			toast(responseMessage + '.', {
				icon: <ShieldCheckIcon />,
			});
		} catch (error: any) {
			toast(error.message + '.', {
				icon: <ExclamationTriangleIcon />,
			});
		} finally {
			reset();
		}
	};
	return (
		<form
			className="flex max-w-lg flex-col items-start gap-y-2 md:w-1/2"
			onSubmit={handleSubmit(onSubmit)}
		>
			<input
				{...register('email')}
				type="text"
				placeholder="email@example.com"
				className={`w-full border bg-transparent px-4 py-2 text-lg outline-none placeholder:text-lime-200 ${errors.email ? 'border-red-500 text-red-500 placeholder:text-red-500' : 'border-lime-200'}`}
			/>
			{errors.email && (
				<span className="text-red-500">{errors.email.message}</span>
			)}
			<button
				disabled={isSubmitting}
				type="submit"
				className="w-full border border-lime-200 bg-lime-200 py-2 text-lg font-medium text-lime-950 transition-colors hover:bg-transparent hover:text-lime-200"
			>
				{isSubmitting ? 'Loading...' : 'Get your discount'}
			</button>
			{errors.root && <div>{errors.root.message}</div>}
		</form>
	);
}
