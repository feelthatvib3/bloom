import cartImage from '../../assets/cart.svg';
import { RootState, useAppSelector } from '../../store';

export default function CartButton() {
    const { productsAdded } = useAppSelector((state: RootState) => state.cart);
    return (
        <div className="relative cursor-pointer">
            {productsAdded > 0 ? (
                <div className="absolute -left-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-semibold text-white lg:h-7 lg:w-7">
                    {productsAdded}
                </div>
            ) : null}
            <img
                src={cartImage}
                alt="Shopping Cart"
                className="h-8 w-8 lg:h-12 lg:w-11"
            />
        </div>
    );
}
