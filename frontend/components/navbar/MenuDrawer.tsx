import { useState } from 'react';

import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
	SheetClose,
} from '@/components/ui/sheet';

import MenuItem from '@/components/navbar/MenuItem';
import CartButton from '@/components/navbar/CartButton';

import {
	type MenuItem as MenuItemItem,
	menuItems,
} from '@/public/data/menu-items';
import Link from 'next/link';

interface MenuDrawerProps {
	isScrolled: boolean;
	currentPathname: string;
}

export default function MenuDrawer({
	isScrolled,
	currentPathname,
}: MenuDrawerProps) {
	const [isOpened, setIsOpened] = useState<boolean>(false);
	return (
		<Sheet open={isOpened} onOpenChange={setIsOpened}>
			<SheetTrigger
				className={`${currentPathname !== '/' && !isScrolled ? 'bg-lime-950' : 'bg-lime-100'} relative flex h-8 w-8 flex-col items-center justify-center `}
			>
				{Array(2)
					.fill(null)
					.map((_, index) => (
						<span
							key={index}
							className={`${currentPathname !== '/' && !isScrolled ? 'bg-lime-100' : 'bg-lime-950'} absolute h-[1.5px] w-[14px] -translate-y-[3.5px] even:translate-y-[3.5px]`}
						></span>
					))}
			</SheetTrigger>
			<SheetContent className="border-none bg-lime-950/70 backdrop-blur-md">
				<SheetHeader className="flex items-center justify-between">
					<SheetTitle className="font-heading text-3xl uppercase text-lime-100">
						<Link href="/">Bloom</Link>
					</SheetTitle>
					<SheetClose className="relative flex h-8 w-8 flex-col items-center justify-center bg-lime-100">
						{Array(2)
							.fill(null)
							.map((_, index) => (
								<span
									key={index}
									className="absolute h-[1.5px] w-[14px] translate-y-0 -rotate-45 bg-lime-950 even:rotate-45"
								></span>
							))}
					</SheetClose>
				</SheetHeader>
				<ul className="mt-8 flex flex-col gap-y-2">
					{menuItems.map(({ id, label, href }: MenuItemItem) => (
						<MenuItem
							key={id}
							label={label}
							href={href}
							onClick={() => setIsOpened(!isOpened)}
						/>
					))}
				</ul>
				<div
					onClick={() => setIsOpened(!isOpened)}
					className="absolute bottom-6 left-6 w-[calc(100%-3rem)]"
				>
					<CartButton />
				</div>
			</SheetContent>
		</Sheet>
	);
}
