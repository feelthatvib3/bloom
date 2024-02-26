import type { ReactNode } from 'react';

import { cn } from '@/app/lib/utils';

interface TitleProps {
	children: ReactNode;
	className?: string;
}

export default function Title({ children, className }: TitleProps) {
	return (
		<h2 className={cn('text-4xl sm:text-5xl lg:text-6xl', className)}>
			{children}
		</h2>
	);
}
