import { Link } from 'react-router-dom';
import { Category } from '../store/features/categoriesSlice';

interface CategoryCardProps {
    category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
    return (
        <li key={category.id}>
            <Link
                to={`/categories/${category.id}`}
                className="flex flex-col gap-y-3 text-center"
            >
                <div className="md:h-[250px] 2xl:h-[350px]">
                    <img
                        src={`http://localhost:3333${category.image}`}
                        alt={`${category.title} category`}
                        className="h-full w-full rounded-xl object-cover"
                    />
                </div>
                <p className="text-xl font-medium">{category.title}</p>
            </Link>
        </li>
    );
}
