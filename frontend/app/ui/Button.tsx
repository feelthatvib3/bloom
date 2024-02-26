'use client';

import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { ButtonIconPosition, ButtonIntent } from '@/app/lib/definitions';

import { cn } from '@/app/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
	intent?: ButtonIntent;
	className?: string;
	icon?: ReactNode;
	iconPosition?: ButtonIconPosition;
}

export default function Button({
	label,
	intent = 'primary',
	className,
	icon,
	iconPosition,
	...props
}: ButtonProps) {
	return (
		<button
			className={cn(
				'flex w-full items-center border px-4 py-2 text-lg font-medium transition-colors',
				icon ? 'justify-between gap-x-4' : 'justify-center',
				intent === 'primary' &&
					'border-lime-950 bg-lime-950 text-lime-200 hover:bg-transparent hover:text-lime-950',
				intent === 'secondary' &&
					'border-lime-200 bg-lime-200 text-lime-950 hover:bg-transparent hover:text-lime-200',
				iconPosition && iconPosition === 'left' && 'flex-row-reverse',
				className,
			)}
			{...props}
		>
			<span>{label}</span>
			{icon && icon}
		</button>
	);
}
