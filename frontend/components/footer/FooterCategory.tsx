import FooterCategoryItem from '@/components/footer/FooterCategoryItem';

import {
	type FooterCategoryItem as FooterCategoryItemType,
	type FooterCategory,
} from '@/public/data/footer-items';

interface FooterCategoryProps {
	category: FooterCategory;
}

export default function FooterCategory({ category }: FooterCategoryProps) {
	const { title, items } = category;
	return (
		<div className="text-start">
			<p className="mb-2 text-2xl font-semibold uppercase">{title}</p>
			<ul>
				{items.map((footerCategoryItem: FooterCategoryItemType) => (
					<FooterCategoryItem
						key={footerCategoryItem.id}
						item={footerCategoryItem}
					/>
				))}
			</ul>
		</div>
	);
}
