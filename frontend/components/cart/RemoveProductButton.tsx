import { XMarkIcon } from '@heroicons/react/24/solid';

import { useAppDispatch } from '@/lib/redux-hooks';
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
			className="flex items-center justify-center"
			onClick={handleRemoveItem}
		>
			<XMarkIcon className="h-6 w-6" />
		</button>
	);
}
