import {
	Squares2X2Icon,
	RocketLaunchIcon,
	ReceiptPercentIcon,
	CreditCardIcon,
} from '@heroicons/react/24/solid';

export interface Feature {
	title: string;
	description: string;
	icon: React.ForwardRefExoticComponent<
		Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
			title?: string | undefined;
			titleId?: string | undefined;
		} & React.RefAttributes<SVGSVGElement>
	>;
}

export const features: Feature[] = [
	{
		title: 'Seasonal Promotions & Discounts',
		description:
			'Enjoy the changing seasons with exclusive promotions and discounts on our garden goods. Stay informed about the latest deals to make the most of your gardening journey while keeping your budget in check.',
		icon: ReceiptPercentIcon,
	},
	{
		title: 'Reliable Shipping',
		description:
			'Receive your garden treasures quickly and reliably with our efficient shipping services. Track your order in real-time and anticipate the joy of unwrapping your new plants and accessories in no time.',
		icon: RocketLaunchIcon,
	},
	{
		title: 'Diverse Product Range',
		description:
			'Immerse yourself in a vast array of high-quality garden goods, from vibrant flowers and lush plants to durable gardening tools and stylish outdoor décor.',
		icon: Squares2X2Icon,
	},
	{
		title: 'Secure and Convenient Checkout',
		description:
			'Experience a hassle-free shopping process with our secure and convenient checkout system. Rest easy knowing that your transactions are protected, and choose from a variety of payment options for added flexibility.',
		icon: CreditCardIcon,
	},
];
