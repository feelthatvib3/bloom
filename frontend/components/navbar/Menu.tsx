'use client';

import Link from 'next/link';
import { FC, useState } from 'react';

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

import { type IMenuItem, menuItems } from '@/data/menuItems';
import CartButton from '@/components/navbar/CartButton';
import MenuButton from '@/components/navbar/MenuButton';

interface MenuProps {
	isScrolled: boolean;
}

const Menu: FC<MenuProps> = ({ isScrolled }) => {
	const [isOpened, setIsOpened] = useState<boolean>(false);
	return (
		<>
			<div className="lg:hidden">
				<Sheet open={isOpened} onOpenChange={setIsOpened}>
					<SheetTrigger>
						<MenuButton intent="open" />
					</SheetTrigger>
					<SheetContent className="border-none bg-lime-950">
						<SheetHeader className="flex items-center justify-between">
							<SheetTitle className="font-heading text-3xl uppercase text-lime-200">
								Bloom
							</SheetTitle>
							<SheetClose>
								<MenuButton intent="close" />
							</SheetClose>
						</SheetHeader>
						<SheetDescription className="mt-6">
							<ul className="mt-2 flex flex-col gap-y-2">
								{menuItems.map(({ id, label, href }: IMenuItem) => (
									<li key={id} className="border-b border-b-lime-100/25 py-2">
										<Link
											onClick={() => setIsOpened(!isOpened)}
											href={href}
											className="text-lg font-medium uppercase text-lime-100"
										>
											{label}
										</Link>
									</li>
								))}
							</ul>
							<div className="absolute bottom-4 left-4 w-[calc(100%-2rem)]">
								<CartButton />
							</div>
						</SheetDescription>
					</SheetContent>
				</Sheet>
			</div>
			<div className="hidden lg:flex lg:gap-x-6">
				<ul className="flex items-center gap-x-6">
					{menuItems.map(({ id, label, href }: IMenuItem) => (
						<MenuItem
							key={id}
							label={label}
							href={href}
							isScrolled={isScrolled}
						/>
					))}
				</ul>
				<CartButton isScrolled={isScrolled} />
			</div>
		</>
	);
};

export default Menu;
