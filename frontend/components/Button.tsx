'use client';

interface ButtonProps {
	label: string;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	disabled?: boolean;
	className?: string;
}

const Button: React.FC<ButtonProps> = ({
	label,
	onClick,
	disabled,
	className = '',
}) => {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={`flex w-full items-center justify-center border border-lime-950 bg-lime-950 p-3 text-lg font-semibold text-lime-100 transition-colors hover:bg-transparent hover:text-lime-950 ${className}`}
		>
			{label}
		</button>
	);
};

export default Button;
