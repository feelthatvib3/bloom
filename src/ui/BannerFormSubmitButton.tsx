interface BannerButtonProps {
    isDiscountRequestSent: boolean;
}

export default function BannerFormSubmitButton({
    isDiscountRequestSent,
}: BannerButtonProps) {
    return (
        <input
            type="submit"
            value={
                isDiscountRequestSent ? 'Request Submitted' : 'Get a discount'
            }
            className={`
	${
        isDiscountRequestSent
            ? 'bg-transparent text-white'
            : 'bg-white text-black hover:bg-black hover:text-white'
    } mt-5 flex cursor-pointer items-center justify-center rounded-md py-4 text-xl font-semibold transition-colors`}
        />
    );
}
