import type {
	FooterCategory as FooterCategoryType,
	FooterCategoryItem as FooterCategoryItemType,
} from '@/app/lib/definitions';

import FooterCategoryItem from '@/components/layout/footer/FooterCategoryItem';

interface FooterCategoryProps {
	category: FooterCategoryType;
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
