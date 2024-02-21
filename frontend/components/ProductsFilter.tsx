'use client';

import { CheckIcon } from '@heroicons/react/24/solid';
import { ChangeEvent, useEffect, useState } from 'react';

import { useAppDispatch } from '@/lib/redux-hooks';
import { type FilterOptions, type SortType } from '@/store/types';
import { fetchProducts, startLoading } from '@/store/slices/products-slice';

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

import { selectValues } from '@/public/data/filter-select-items';

interface ProductsFilterProp {
	endpoint: string;
}

export default function ProductsFilter({ endpoint }: ProductsFilterProp) {
	const dispatch = useAppDispatch();

	const [fromPrice, setFromPrice] = useState<number>(0);
	const [toPrice, setToPrice] = useState<number>(Number.MAX_SAFE_INTEGER);
	const [isDiscounted, setIsDiscounted] = useState<boolean>(false);
	const [sortBy, setSortBy] = useState<SortType>('newest');

	const handleFromPriceChange = (event: ChangeEvent<HTMLInputElement>) =>
		setFromPrice(+event.target.value);

	const handleToPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
		const toPrice = +event.target.value;
		toPrice === 0 ? setToPrice(Number.MAX_SAFE_INTEGER) : setToPrice(toPrice);
	};

	const handleSortChange = (value: SortType) => setSortBy(value);

	const handleIsDiscountedChange = (event: ChangeEvent<HTMLInputElement>) =>
		setIsDiscounted(event.target.checked);

	useEffect(() => {
		const fetchData = (endpoint: string, filters: FilterOptions) =>
			dispatch(fetchProducts({ endpoint, filters }));
		const startLoadingData = () => dispatch(startLoading());

		startLoadingData();

		const timeoutId = setTimeout(() => {
			const filters: FilterOptions = {
				fromPrice,
				toPrice,
				isDiscounted,
				sortBy,
			};

			fetchData(endpoint, filters);
		}, 1500);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [dispatch, fromPrice, toPrice, isDiscounted, sortBy, endpoint]);
	return (
		<form className="flex flex-col items-start gap-y-3 sm:flex-row sm:gap-x-4 sm:gap-y-0">
			<div className="space-y-1">
				<span className="text-xl font-medium">Price</span>
				<div className="space-x-2">
					<input
						onChange={handleFromPriceChange}
						type="number"
						placeholder="from"
						className="h-[36px] max-w-[125px] border border-lime-950 bg-transparent px-2 py-1 text-lg outline-none placeholder:text-lime-950/65"
					/>
					<input
						onChange={handleToPriceChange}
						type="number"
						placeholder="to"
						className="h-[36px] max-w-[125px] border border-lime-950 bg-transparent p-1 px-2 text-lg outline-none placeholder:text-lime-950/65"
					/>
				</div>
			</div>
			<div className="space-y-1">
				<span className="text-xl font-medium">Sort by</span>
				<Select value={sortBy} onValueChange={handleSortChange}>
					<SelectTrigger className="w-[180px] rounded-none border-lime-950 bg-transparent pr-1 text-lg outline-none focus:ring-0 active:border">
						<SelectValue />
					</SelectTrigger>
					<SelectContent className="w-[180px] rounded-none border-none bg-lime-950/65 backdrop-blur-xl">
						{selectValues.map(({ value, label }, index) => (
							<SelectItem
								key={index}
								className="text-lg text-lime-200 focus:rounded-none focus:bg-lime-200/25 focus:text-lime-200"
								value={value}
							>
								{label}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
			<div className="space-y-1">
				<span className="text-xl font-medium">Discounted</span>
				<div className="relative h-[36px] w-[36px]">
					<input
						onChange={handleIsDiscountedChange}
						type="checkbox"
						className="group relative h-full w-full cursor-pointer appearance-none rounded-none border border-lime-950 outline-none transition-colors checked:bg-lime-950"
					/>
					<CheckIcon
						className={`pointer-events-none absolute left-1/2 top-1/2 z-10 h-5 w-5 -translate-x-1/2 -translate-y-1/2 text-lime-200 transition-opacity ${isDiscounted ? 'opacity-100' : 'opacity-0'}`}
					/>
				</div>
			</div>
		</form>
	);
}
