'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
	className?: string;
	icon?: ReactNode;
}

export default function Button({
	label,
	className = '',
	icon,
	...props
}: ButtonProps) {
	return (
		<button
			className={`${icon ? 'justify-between gap-x-4' : 'justify-center'} flex w-full items-center border border-lime-950 bg-lime-950 px-4 py-2 text-lg font-semibold text-lime-100 transition-colors hover:bg-transparent hover:text-lime-950 ${className}`}
			{...props}
		>
			<span>{label}</span>
			{icon && icon}
		</button>
	);
}
