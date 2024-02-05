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
			<DropdownMenuTrigger className="relative flex flex-col items-center justify-center gap-y-[6px] rounded-full border border-lime-800/10 bg-lime-700/20 p-3 py-4 outline-none">
				<span
					className={`${isOpened ? 'translate-y-1 rotate-45' : ''} h-[1.8px] w-[21px] rounded-md bg-lime-900 transition-transform`}
				></span>
				<span
					className={`${isOpened ? '-translate-y-1 -rotate-45' : ''} h-[1.8px] w-[21px] rounded-md bg-lime-900 transition-transform`}
				></span>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="absolute -right-7 top-5 rounded-xl border border-lime-800/10 bg-lime-700/20 shadow-none backdrop-blur-xl">
				<DropdownMenuItem className="rounded-md focus:bg-lime-900/10">
					Profile
				</DropdownMenuItem>
				<DropdownMenuItem className="rounded-md focus:bg-lime-900/10">
					Billing
				</DropdownMenuItem>
				<DropdownMenuItem className="rounded-md focus:bg-lime-900/10">
					Team
				</DropdownMenuItem>
				<DropdownMenuItem className="rounded-md focus:bg-lime-900/10">
					Subscription
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default Menu;
