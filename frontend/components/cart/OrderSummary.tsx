import Button from '@/components/Button';

import { useAppSelector } from '@/lib/redux-hooks';
import { RootState } from '@/store/store';

export default function OrderSummary() {
	const { totalPrice } = useAppSelector((state: RootState) => state.cart);
	const subtotal = totalPrice;
	const tax = 3;
	const total = totalPrice + tax;
	return (
		<div className="flex h-fit flex-col gap-y-4 border border-lime-950 p-4 lg:w-2/5">
			<p className="text-2xl font-semibold uppercase">Order summary</p>
			<div className="text-lg">
				<div className="flex justify-between gap-x-4">
					<p className="font-medium uppercase text-lime-950/65">Subtotal</p>
					<p className="font-medium">${subtotal.toFixed(2)}</p>
				</div>
				<div className="flex justify-between gap-x-4">
					<p className="font-medium uppercase text-lime-950/65">Tax</p>
					<p className="font-medium">${tax.toFixed(2)}</p>
				</div>
				<div className="flex justify-between gap-x-4">
					<p className="font-medium uppercase text-lime-950/65">Total</p>
					<p className="font-medium">${total.toFixed(2)}</p>
				</div>
			</div>
			<Button label="Checkout" />
		</div>
	);
}
