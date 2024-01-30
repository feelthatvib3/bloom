import cartImage from '../../assets/cart.svg';

export default function CartButton() {
    const array = Array(100); // later obtained from redux store
    return (
        <div className="relative cursor-pointer">
            {array.length > 1 ? (
                <div
                    className={`${array.length > 99 ? 'text-xs' : 'text-md'} absolute -left-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent font-semibold text-white lg:h-7 lg:w-7`}
                >
                    {array.length}
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
