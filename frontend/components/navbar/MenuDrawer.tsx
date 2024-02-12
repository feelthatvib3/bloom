import { useState } from 'react';

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
	SheetClose,
} from '@/components/ui/sheet';

import MenuItem from '@/components/navbar/MenuItem';
import MenuButton from '@/components/navbar/MenuButton';
import CartButton from '@/components/navbar/CartButton';

import { type IMenuItem, menuItems } from '@/data/menu-items';

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
						Bloom
					</SheetTitle>
					<SheetClose>
						<MenuButton intent="close" />
					</SheetClose>
				</SheetHeader>
				<SheetDescription className="mt-6">
					<ul className="mt-2 flex flex-col gap-y-2">
						{menuItems.map(({ id, label, href }: IMenuItem) => (
							<MenuItem
								key={id}
								label={label}
								href={href}
								onClick={() => setIsOpened(!isOpened)}
							/>
						))}
					</ul>
					<div className="absolute bottom-6 left-6 w-[calc(100%-3rem)]">
						<CartButton />
					</div>
				</SheetDescription>
			</SheetContent>
		</Sheet>
	);
}
