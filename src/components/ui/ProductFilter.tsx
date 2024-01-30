import Select, { Option } from './Select';

interface ProductFilterProps {
    type: 'category' | 'products' | 'sales';
}

export default function ProductFilter({ type }: ProductFilterProps) {
    const filterOptions: Option[] = [
        { value: 'default', label: 'by default' },
        { value: 'newest', label: 'newest' },
        { value: 'price-dsc', label: 'price: high-low' },
        { value: 'price-asc', label: 'price: low-high' },
    ];
    const handleSelect = (option: Option) => {};
    return (
        <div className="flex flex-wrap gap-x-8 gap-y-4 py-6 lg:gap-x-10 lg:py-8 2xl:py-10">
            <div className="flex items-center gap-x-3 lg:gap-x-4">
                <label className="text-xl font-semibold">Price</label>
                <input
                    type="number"
                    placeholder="from"
                    className="no-spinner max-w-[112px] rounded-md border border-divider px-4 py-2 font-medium text-darkgray placeholder:text-darkgray focus:outline-none"
                />
                <input
                    type="number"
                    placeholder="to"
                    className="no-spinner max-w-[112px] rounded-md border border-divider px-4 py-2 font-medium text-darkgray placeholder:text-darkgray focus:outline-none"
                />
            </div>
            {type !== 'sales' && (
                <div className="flex items-center gap-x-3 lg:gap-x-4">
                    <label className="text-xl font-semibold">
                        Discounted items
                    </label>
                    <input
                        type="checkbox"
                        className="checked:after:content-checkmark flex h-9 w-9 cursor-pointer appearance-none items-center justify-center rounded-md border border-divider transition-colors checked:border-accent checked:bg-accent"
                    />
                </div>
            )}
            <div className="flex items-center gap-x-3 lg:gap-x-4">
                <label className="text-xl font-semibold">Sorted</label>
                <Select options={filterOptions} onSelect={handleSelect} />
            </div>
        </div>
    );
}
