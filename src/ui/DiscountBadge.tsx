import calculateDiscountPercentage from '../utils/calculateDiscountPercentage';

interface DiscountProps {
    regularPrice: number;
    discountPrice: number;
    className?: string;
}

export default function DiscountBadge({
    regularPrice,
    discountPrice,
    className = '',
}: DiscountProps) {
    const discountPercentage = calculateDiscountPercentage(
        regularPrice,
        discountPrice,
    );
    return (
        <div
            className={`rounded-md bg-accent px-2 py-1 text-xl font-semibold text-white ${className}`}
        >
            -{discountPercentage}%
        </div>
    );
}
