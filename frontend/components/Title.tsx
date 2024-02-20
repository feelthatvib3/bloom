import { ReactNode } from 'react';

interface TitleProps {
	children: ReactNode;
	className?: string;
}

export default function Title({ children, className = '' }: TitleProps) {
	return (
		<h2 className={`text-4xl sm:text-5xl lg:text-6xl ${className}`}>
			{children}
		</h2>
	);
}
