import { FC } from 'react';

interface TitleProps {
	text: string;
	className?: string;
}

const Title: FC<TitleProps> = ({ text, className = '' }) => {
	return <h2 className={`text-4xl ${className}`}>{text}</h2>;
};

export default Title;
