import { FC, ReactNode } from 'react';

interface ContainerProps {
	children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
	return <div className="mx-auto max-w-screen-xl px-4">{children}</div>;
};

export default Container;
