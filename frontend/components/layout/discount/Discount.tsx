import Title from '@/app/ui/Title';
import Container from '@/app/ui/Container';
import DiscountForm from '@/components/layout/discount/DiscountForm';

export default function Discount() {
	return (
		<section className="bg-lime-950 py-6 text-lime-200 md:py-10 lg:py-14">
			<Container className="flex flex-col items-center justify-center gap-y-8 text-center md:flex-row md:justify-between md:gap-x-10 md:text-start">
				<div className="max-w-lg md:w-1/2">
					<Title>Discount Dream</Title>
					<p className="mt-4 text-lg">
						Sign up for our newsletter and dive into a world of discounts on
						premium garden goods.
					</p>
				</div>
				<DiscountForm />
			</Container>
		</section>
	);
}
