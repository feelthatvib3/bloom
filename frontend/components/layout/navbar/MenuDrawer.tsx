'ues client';

import type { MenuItem as MenuItemType } from '@/app/lib/definitions';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import Button from '@/app/ui/Button';
import MenuItem from '@/components/layout/navbar/MenuItem';

import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
	SheetClose,
} from '@/components/ui/sheet';

import { menuItems } from '@/public/data/menu-items';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import Logo from '@/app/ui/Logo';

interface MenuDrawerProps {
	isScrolled: boolean;
	currentPathname: string;
}

export default function MenuDrawer({
	isScrolled,
	currentPathname,
}: MenuDrawerProps) {
	const [isOpened, setIsOpened] = useState<boolean>(false);
	const router = useRouter();

	const handleShoppingCartButtonClick = () => {
		setIsOpened(!isOpened);
		router.push('/cart');
	};
	return (
		<Sheet open={isOpened} onOpenChange={setIsOpened}>
			<SheetTrigger
				className={`${currentPathname !== '/' && !isScrolled ? 'bg-lime-950' : 'bg-lime-200'} relative flex h-8 w-8 flex-col items-center justify-center `}
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
			<SheetContent className="flex flex-col justify-between border-none bg-lime-950/70 backdrop-blur-md">
				<SheetHeader className="flex items-center justify-between">
					<Logo className="text-4xl text-lime-200" />
					<SheetClose className="relative flex h-8 w-8 flex-col items-center justify-center bg-lime-200">
						{Array(2)
							.fill(null)
							.map((_, index) => (
								<span
									key={index}
									className="absolute h-[1.5px] w-[17px] -rotate-45 bg-lime-950 even:rotate-45"
								></span>
							))}
					</SheetClose>
				</SheetHeader>
				<ul className="flex flex-col gap-y-2">
					{menuItems.map(({ id, label, href }: MenuItemType) => (
						<MenuItem
							key={id}
							label={label}
							href={href}
							onClick={() => setIsOpened(!isOpened)}
						/>
					))}
				</ul>
				<Button
					intent="secondary"
					label="Shopping cart"
					icon={<ShoppingCartIcon className="h-6 w-6" />}
					onClick={handleShoppingCartButtonClick}
					className=" text-xl font-semibold uppercase hover:bg-lime-200 hover:text-lime-950"
				/>
			</SheetContent>
		</Sheet>
	);
}
