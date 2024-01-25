export default function calculateDiscountPercentage(
    regularPrice: number,
    discountPrice: number,
): number {
    const discountPercentage =
        ((regularPrice - discountPrice) / regularPrice) * 100;
    return Math.trunc(discountPercentage);
}
