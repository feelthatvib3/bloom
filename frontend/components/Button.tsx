'use client';

interface ButtonProps {
	label: string;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className="flex w-full items-center justify-center rounded-xl border border-lime-950/20 bg-lime-700/20 p-3 text-lg font-semibold"
		>
			{label}
		</button>
	);
};

export default Button;
