interface TitleProps {
	text: string;
	className?: string;
}

export default function Title({ text, className = '' }: TitleProps) {
	return <h2 className={`text-4xl lg:text-6xl ${className}`}>{text}</h2>;
}
