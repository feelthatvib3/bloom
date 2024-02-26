import type { ButtonHTMLAttributes, ReactNode } from 'react';

import { cn } from '@/app/lib/utils';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon: ReactNode;
	className?: string;
}

export default function IconButton({
	icon,
	className,
	...props
}: IconButtonProps) {
	return (
		<button
			className={cn(
				'flex items-center justify-center bg-lime-200 p-3 text-lime-950',
				className,
			)}
			{...props}
		>
			{icon}
		</button>
	);
}
