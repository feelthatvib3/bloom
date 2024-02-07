import { FC } from 'react';

interface MenuButtonProps {
	intent: 'open' | 'close';
}

const MenuButton: FC<MenuButtonProps> = ({ intent }) => {
	return (
		<button className="relative flex h-8 w-8 flex-col items-center justify-center bg-lime-200 outline-none">
			{Array(2)
				.fill(null)
				.map((_, index) => (
					<span
						key={index}
						className={`absolute h-[1.5px] w-[14px] ${intent === 'open' ? '-translate-y-[3.5px] even:translate-y-[3.5px]' : 'translate-y-0 -rotate-45 even:rotate-45'} bg-lime-950 `}
					></span>
				))}
		</button>
	);
};

export default MenuButton;
