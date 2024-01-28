import { useParams } from 'react-router-dom';
import Container from '../components/Container';
import { useEffect, useState } from 'react';
import { RootState, useAppDispatch, useAppSelector } from '../store';
import {
    clearCurrentProduct,
    fetchProductById,
} from '../store/features/productsSlice';
import Breadcrumb from '../ui/Breadcrumb';
import DiscountBadge from '../ui/DiscountBadge';
import ProductAmountConter from '../ui/ProductAmountCounter';

export default function ProductInfoPage() {
    const [isDescriptionCollapsed, setIsDescriptionCollapsed] =
        useState<boolean>(true);

    const { currentProduct } = useAppSelector(
        (state: RootState) => state.products,
    );
    const dispatch = useAppDispatch();

    const { productId } = useParams();

    const handleDescriptionButtonClick = () =>
        setIsDescriptionCollapsed(!isDescriptionCollapsed);

    useEffect(() => {
        if (productId) {
            dispatch(fetchProductById(productId));
        }
        return () => {
            dispatch(clearCurrentProduct());
        };
    }, []);
    return (
        <main>
            <section className="pt-8 xl:pt-10">
                <Container>
                    <Breadcrumb />
                    {/* title (visible by default; hidden after 'lg' breakpoint) */}
                    <h1 className="text-[28px] font-bold leading-[110%] lg:hidden lg:text-[32px] xl:text-[40px]">
                        {currentProduct?.title}
                    </h1>
                    {/* rightside content (grid) */}
                    <div className="mt-5 grid gap-5 md:grid-cols-2 md:place-content-start md:place-items-center lg:mt-8 xl:mt-10 2xl:gap-x-8">
                        {/* image */}
                        <div className="relative overflow-hidden rounded-xl">
                            <img
                                src={`http://localhost:3333/${currentProduct?.image}`}
                                alt={currentProduct?.title}
                                className="h-full w-full object-cover"
                            />
                            {currentProduct?.discont_price &&
                                currentProduct?.price && (
                                    <DiscountBadge
                                        regularPrice={currentProduct.price}
                                        discountPrice={
                                            currentProduct.discont_price
                                        }
                                        className="absolute right-4 top-4 w-fit leading-[110%] lg:hidden"
                                    />
                                )}
                        </div>
                        {/* content block */}
                        <div className="flex w-full flex-col gap-y-3 md:gap-y-5">
                            {/* title (hidden by default; visible after 'lg' breakpoint) */}
                            <h1 className="hidden text-[28px] font-bold leading-[110%] lg:block lg:text-[32px] xl:text-[40px]">
                                {currentProduct?.title}
                            </h1>
                            {/* price */}
                            <div className="relative mx-auto max-w-fit md:mx-0">
                                <span className="mr-3 text-[40px] font-bold leading-[44px] md:text-5xl lg:text-[56px] xl:text-[64px]">
                                    ${currentProduct?.price}
                                </span>
                                {currentProduct?.discont_price && (
                                    <>
                                        <span className="text-[28px] font-medium text-darkgray line-through lg:text-[32px] xl:text-[40px]">
                                            ${currentProduct?.discont_price}
                                        </span>
                                        <DiscountBadge
                                            regularPrice={currentProduct.price}
                                            discountPrice={
                                                currentProduct.discont_price
                                            }
                                            className="absolute left-[calc(100%+16px)] top-0 hidden w-fit lg:block"
                                        />
                                    </>
                                )}
                            </div>
                            {/* counter + button */}
                            <div className="flex flex-col gap-y-3 md:gap-y-5 xl:flex-row xl:gap-x-1 2xl:gap-x-5">
                                <ProductAmountConter />
                                <button className="flex w-full items-center justify-center rounded-md bg-accent px-8 py-3 text-xl font-semibold text-white transition-colors hover:bg-black">
                                    Add to cart
                                </button>
                            </div>
                            {/* decsription (hidden by default; visible after 'xl' breakpoint) */}
                            <div className="hidden lg:flex-col lg:gap-y-3 xl:flex">
                                <h2 className="text-lg font-semibold lg:text-xl">
                                    Description
                                </h2>
                                <p
                                    className={`${isDescriptionCollapsed ? 'line-clamp-3' : 'line-clamp-none'} text-sm leading-[130%] lg:text-base`}
                                >
                                    {currentProduct?.description}
                                </p>
                                {currentProduct &&
                                    currentProduct.description.length > 250 && (
                                        <button
                                            onClick={
                                                handleDescriptionButtonClick
                                            }
                                            className="w-fit text-sm font-medium hover:underline hover:underline-offset-2 lg:text-base"
                                        >
                                            {isDescriptionCollapsed
                                                ? 'Read more'
                                                : 'Collapse'}
                                        </button>
                                    )}
                            </div>
                        </div>
                        {/* description (visible by default; hidden after 'xl' breakpoint) + 'read more' button */}
                        <div className="flex flex-col gap-y-3 md:col-span-2 xl:hidden">
                            <h2 className="text-lg font-semibold lg:text-xl">
                                Description
                            </h2>
                            <p
                                className={`${isDescriptionCollapsed ? 'line-clamp-3' : 'line-clamp-none'} text-sm leading-[130%] lg:text-base`}
                            >
                                {currentProduct?.description}
                            </p>
                            {currentProduct &&
                                currentProduct.description.length > 250 && (
                                    <button
                                        onClick={handleDescriptionButtonClick}
                                        className="w-fit text-sm font-medium hover:underline hover:underline-offset-2 lg:text-base"
                                    >
                                        {isDescriptionCollapsed
                                            ? 'Read more'
                                            : 'Collapse'}
                                    </button>
                                )}
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
