import DiscountForm from './DiscountForm';
import discountImage from '../assets/banner.png';

export default function DiscountBanner() {
    return (
        <div className="overflow-hidden rounded-xl bg-gradient-to-r from-[#339933] to-[#0B710B] px-5 pt-6 lg:py-8">
            <h2 className="mb-6 text-center text-[40px] font-bold leading-[44px] text-white md:text-5xl lg:-mb-20 lg:text-[56px] xl:text-[64px]">
                5% off on the first order
            </h2>
            <div className="flex flex-col lg:flex-row-reverse lg:items-end lg:justify-start xl:justify-between">
                <DiscountForm />
                <img
                    src={discountImage}
                    alt="People with gardening tools in their hands"
                    className="mt-7 flex-shrink scale-125 lg:mt-3 lg:translate-y-14 lg:scale-90"
                />
            </div>
        </div>
    );
}
