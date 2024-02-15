interface ProductPriceProps {
	regularPrice: number;
	discountPercent: number | null;
}

export default function ProductPrice({
	regularPrice,
	discountPercent,
}: ProductPriceProps) {
	let discountPrice = '';
	if (discountPercent) {
		discountPrice = (
			regularPrice -
			regularPrice * (discountPercent / 100)
		).toFixed(2);
	}
	return (
		<div className="flex justify-between">
			<div className="flex items-end gap-x-1">
				<span className="text-4xl font-medium">
					${discountPercent ? discountPrice : regularPrice}
				</span>
				{discountPercent && (
					<span className="text-xl line-through">${regularPrice}</span>
				)}
			</div>
			{discountPercent && (
				<div className="flex w-[15%] items-center justify-center bg-lime-200 p-2 text-lg font-medium text-lime-950 lg:w-[20%]">
					-{discountPercent}%
				</div>
			)}
		</div>
	);
}