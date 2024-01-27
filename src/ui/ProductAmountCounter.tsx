export default function ProductAmountConter() {
    return (
        <div className="flex">
            <button className="z-10 flex w-[47px] items-center justify-center rounded-md border border-divider bg-white">
                <span className="h-[2px] w-4 rounded-full bg-darkgray"></span>
            </button>
            <input
                className="no-spinner z-0 max-w-[70px] -translate-x-2 rounded-md border border-divider bg-white px-1 py-3 text-center text-lg font-semibold focus:outline-none"
                min={1}
                defaultValue={1}
                type="number"
            />
            <button className="z-10 flex w-[47px] -translate-x-4 items-center justify-center rounded-md border border-divider bg-white">
                <span className="h-[2px] w-4 translate-x-1/2 rounded-full bg-darkgray"></span>
                <span className="h-[2px] w-4 -translate-x-1/2 rotate-90 rounded-full bg-darkgray"></span>
            </button>
        </div>
    );
}
