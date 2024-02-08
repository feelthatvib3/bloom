import { FC, ReactNode } from 'react';

interface ContainerProps {
	children: ReactNode;
	className?: string;
}

const Container: FC<ContainerProps> = ({ children, className = '' }) => {
	return (
		<div className={`mx-auto max-w-screen-xl px-4 ${className}`}>
			{children}
		</div>
	);
};

export default Container;