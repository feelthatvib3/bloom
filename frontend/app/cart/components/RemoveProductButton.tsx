import { XMarkIcon } from '@heroicons/react/24/solid';

import { useAppDispatch } from '@/app/lib/redux-hooks';
import { removeFromCart } from '@/store/slices/cart-slice';

interface RemoveProductButtonProps {
	productId: string;
}

export default function RemoveProductButton({
	productId,
}: RemoveProductButtonProps) {
	const dispatch = useAppDispatch();
	const handleRemoveItem = () => {
		dispatch(removeFromCart(productId));
	};
	return (
		<button
			className="flex items-center justify-center p-1 transition-colors hover:bg-lime-700/10"
			onClick={handleRemoveItem}
		>
			<XMarkIcon className="h-6 w-6" />
		</button>
	);
}
