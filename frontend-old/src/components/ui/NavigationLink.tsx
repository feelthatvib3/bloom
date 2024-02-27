import { Link } from 'react-router-dom';
import { NavigationLink as NavigationLinkType } from '../../definitions';

interface NavigationLinkProps {
    navigationLink: NavigationLinkType;
}

export default function NavigationLink({
    navigationLink,
}: NavigationLinkProps) {
    return (
        <li>
            <Link
                to={navigationLink.href}
                className="text-xl font-medium text-black transition-colors hover:text-accent"
            >
                {navigationLink.name}
            </Link>
        </li>
    );
}
