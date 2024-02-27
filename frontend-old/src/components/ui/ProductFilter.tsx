import { ChangeEvent, KeyboardEvent, useRef } from 'react';
import Select, { Option } from './Select';
import { useAppDispatch } from '../../store';
import {
    filterByPrice,
    showDiscountedOnly,
    sortProducts,
} from '../../store/slices/productsSlice';

interface ProductFilterProps {
    type: 'category' | 'products' | 'sales';
}

export type SortValue =
    | 'default'
    | 'price-desc'
    | 'price-asc'
    | 'title-desc'
    | 'title-asc';

export default function ProductFilter({ type }: ProductFilterProps) {
    const dispatch = useAppDispatch();
    const filterOptions: Option[] = [
        { value: 'default', label: 'by default' },
        { value: 'price-desc', label: 'price: high-low' },
        { value: 'price-asc', label: 'price: low-high' },
        { value: 'title-desc', label: 'price: A-Z' },
        { value: 'title-asc', label: 'price: Z-A' },
    ];

    const formRef = useRef(null);

    const handlePriceFilter = (event: KeyboardEvent<HTMLFormElement>) => {
        let formData = new FormData(event.currentTarget);

        let data: Record<string, number> = {};
        formData.forEach((value, key) => {
            data[key] = +value;
        });

        data.from = data.from ? data.from : 0;
        data.to = data.to ? data.to : Infinity;

        dispatch(filterByPrice(data));
    };

    const handleCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
        const checkboxChecked = event.target.checked;
        dispatch(showDiscountedOnly(checkboxChecked));
    };

    const handleSelect = (option: Option) => {
        const sortValue = option.value;
        dispatch(sortProducts(sortValue));
    };
    return (
        <div className="flex flex-wrap gap-x-8 gap-y-4 py-6 lg:gap-x-10 lg:py-8 2xl:py-10">
            <form
                ref={formRef}
                onKeyUp={handlePriceFilter}
                className="flex items-center gap-x-3 lg:gap-x-4"
            >
                <label className="text-xl font-semibold">Price</label>
                <input
                    name="from"
                    type="number"
                    placeholder="from"
                    className="no-spinner max-w-[112px] rounded-md border border-divider px-4 py-2 font-medium text-darkgray placeholder:text-darkgray focus:outline-none"
                />
                <input
                    name="to"
                    type="number"
                    placeholder="to"
                    className="no-spinner max-w-[112px] rounded-md border border-divider px-4 py-2 font-medium text-darkgray placeholder:text-darkgray focus:outline-none"
                />
            </form>
            {type !== 'sales' && (
                <div className="flex items-center gap-x-3 lg:gap-x-4">
                    <label className="text-xl font-semibold">
                        Discounted items
                    </label>
                    <input
                        onChange={handleCheckbox}
                        type="checkbox"
                        className="flex h-9 w-9 cursor-pointer appearance-none items-center justify-center rounded-md border border-divider transition-colors checked:border-accent checked:bg-accent checked:after:content-checkmark"
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
