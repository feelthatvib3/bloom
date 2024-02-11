import { usePathname } from 'next/navigation';

interface MenuButtonProps {
	intent: 'open' | 'close';
	isScrolled?: boolean;
}

export default function MenuButton({ intent, isScrolled }: MenuButtonProps) {
	const currentPathname = usePathname();
	return (
		<button
			className={`${intent !== 'close' && currentPathname !== '/' && !isScrolled ? 'bg-lime-950' : 'bg-lime-100'} relative flex h-8 w-8 flex-col items-center justify-center `}
		>
			{Array(2)
				.fill(null)
				.map((_, index) => (
					<span
						key={index}
						className={`${intent !== 'close' && currentPathname !== '/' && !isScrolled ? 'bg-lime-100' : 'bg-lime-950'} ${intent === 'open' ? '-translate-y-[3.5px] even:translate-y-[3.5px]' : 'translate-y-0 -rotate-45 even:rotate-45'} absolute h-[1.5px] w-[14px]`}
					></span>
				))}
		</button>
	);
}
