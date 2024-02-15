import Title from '@/components/Title';
import Container from '@/components/Container';
import DiscountForm from '@/components/discount/DiscountForm';

export default function Discount() {
	return (
		<section className="bg-lime-950 py-6 text-lime-200 md:py-10 lg:py-14">
			<Container className="flex flex-col justify-center gap-y-8 md:flex-row md:items-center md:justify-between md:gap-x-10">
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
