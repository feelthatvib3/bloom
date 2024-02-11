import { ReactNode } from 'react';

interface ContainerProps {
	children: ReactNode;
	className?: string;
}

export default function Container({
	children,
	className = '',
}: ContainerProps) {
	return (
		<div className={`mx-auto max-w-screen-xl px-4 ${className}`}>
			{children}
		</div>
	);
}
