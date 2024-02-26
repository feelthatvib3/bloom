interface ProductPriceProps {
	regularPrice: number;
	discountPercent: number | null;
	discountPercentShown?: boolean;
}

export default function ProductPrice({
	regularPrice,
	discountPercent,
	discountPercentShown = true,
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
			{discountPercentShown && discountPercent && (
				<div className="flex min-w-12 items-center justify-center bg-lime-200 text-lg font-medium text-lime-950">
					-{discountPercent}%
				</div>
			)}
		</div>
	);
}
