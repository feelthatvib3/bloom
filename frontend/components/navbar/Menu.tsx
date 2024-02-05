'use client';

import { FC, useState } from 'react';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Menu: FC = () => {
	const [isOpened, setIsOpened] = useState<boolean>(false);
	return (
		<DropdownMenu open={isOpened} onOpenChange={setIsOpened}>
			<DropdownMenuTrigger className="flex h-8 w-8 flex-col items-center justify-center gap-y-[6px] rounded-full border border-lime-900/10 bg-lime-900/10 outline-none">
				<span
					className={`
						absolute
						h-[1.5px]
						w-[14px]
						bg-lime-900
						transition-transform
						${isOpened ? 'rotate-45' : 'rotate-0'}
						${isOpened ? 'translate-y-0' : '-translate-y-[3.5px]'}
					`}
				></span>
				<span
					className={`
						absolute
						h-[1.5px]
						w-[14px]

						bg-lime-900
						transition-transform
						${isOpened ? 'translate-y-0' : 'translate-y-[3.5px]'}
						${isOpened ? '-rotate-45' : 'rotate-0'}
					`}
				></span>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="absolute -right-7 top-5 rounded-xl border border-lime-800/10 bg-lime-700/20 shadow-none backdrop-blur-xl">
				<DropdownMenuItem className="rounded-md font-medium text-lime-100 transition focus:cursor-pointer focus:bg-lime-950/60 focus:text-lime-100">
					Profile
				</DropdownMenuItem>
				<DropdownMenuItem className="rounded-md font-medium text-lime-100 transition focus:cursor-pointer focus:bg-lime-950/60 focus:text-lime-100">
					Billing
				</DropdownMenuItem>
				<DropdownMenuItem className="rounded-md font-medium text-lime-100 transition focus:cursor-pointer focus:bg-lime-950/60 focus:text-lime-100">
					Team
				</DropdownMenuItem>
				<DropdownMenuItem className="rounded-md font-medium text-lime-100 transition focus:cursor-pointer focus:bg-lime-950/60 focus:text-lime-100">
					Subscription
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default Menu;
