interface DiscountProps {
    discountValue: number;
}

export default function DiscountBadge({ discountValue }: DiscountProps) {
    return (
        <div className="rounded-md bg-accent px-2 py-1 text-xl font-semibold text-white">
            -{Math.floor(discountValue)}%
        </div>
    );
}
