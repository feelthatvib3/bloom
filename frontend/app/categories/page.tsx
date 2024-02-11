import Container from '@/components/Container';
import { ArrowDownIcon } from '@heroicons/react/24/solid';

export default function CategoriesPage() {
	return (
		<main className="py-[calc(1rem+69px)]">
			<Container>
				<div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
					<div className="group flex items-center justify-between bg-lime-200 p-2 sm:col-span-2">
						<span className="text-lg font-medium sm:text-2xl">
							Garden essentials in one place
						</span>
						<ArrowDownIcon className="h-5 w-5 rotate-45 transition-transform group-hover:rotate-0 sm:h-7 sm:w-7" />
					</div>
					<div className="h-[200px] bg-lime-200 p-2"></div>
					<div className="h-[200px] bg-lime-200 p-2"></div>
					<div className="h-[200px] bg-lime-200 p-2 sm:col-span-2"></div>
					<div className="h-[200px] bg-lime-200 p-2"></div>
					<div className="h-[200px] bg-lime-200 p-2"></div>
				</div>
			</Container>
		</main>
	);
}
