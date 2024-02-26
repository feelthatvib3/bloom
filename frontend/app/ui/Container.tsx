import type { ReactNode } from 'react';

import { cn } from '@/app/lib/utils';

interface ContainerProps {
	children: ReactNode;
	className?: string;
}

export default function Container({ children, className }: ContainerProps) {
	return (
		<div className={cn('mx-auto max-w-3xl px-4 lg:max-w-screen-xl', className)}>
			{children}
		</div>
	);
}
