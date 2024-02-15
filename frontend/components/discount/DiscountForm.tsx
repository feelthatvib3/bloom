'use client';

import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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
			reset();
		} catch (error) {}
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
