import cartImage from '../assets/cart.svg';

export default function Cart() {
    const array = [{}, {}, {}]; // later obtained from redux store
    return (
        <div className="relative cursor-pointer">
            {array.length > 1 ? (
                <div className="bg-accent absolute -left-1 top-1 flex h-5 w-5 items-center justify-center rounded-full text-xs font-semibold text-white">
                    {array.length}
                </div>
            ) : null}
            <img src={cartImage} alt="Shopping Cart" width={30} height={30} />
        </div>
    );
}
