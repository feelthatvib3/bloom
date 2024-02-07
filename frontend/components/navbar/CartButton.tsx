import { FC } from 'react';
import Link from 'next/link';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

interface CartButtonProps {
	isScrolled?: boolean;
}

const CartButton: FC<CartButtonProps> = ({ isScrolled }) => {
	return (
		<Link
			href="/cart"
			className={`flex w-full items-center justify-center gap-x-4 border bg-lime-100 p-3 text-lg font-semibold transition-colors  hover:bg-transparent lg:text-lime-100 ${isScrolled ? 'border-lime-100 bg-lime-100 text-lime-950 hover:text-lime-100 lg:text-lime-950' : 'bg-lime-100 text-lime-950 hover:border-lime-100 hover:text-lime-100 lg:border-lime-950 lg:bg-lime-950 hover:lg:border-lime-950 lg:hover:text-lime-950'}`}
		>
			<ShoppingCartIcon className="h-6 w-6" />
			<span className="uppercase lg:hidden">Shopping cart</span>
		</Link>
	);
};

export default CartButton;
