import { NavigationLink as NavigationLinkType } from '../data/navigationLinks';

interface NavigationLinkProps {
    navigationLink: NavigationLinkType;
}

export default function NavigationLink({
    navigationLink,
}: NavigationLinkProps) {
    return (
        <li>
            <a
                href={navigationLink.href}
                className="text-xl font-medium text-black transition-colors hover:text-accent"
            >
                {navigationLink.name}
            </a>
        </li>
    );
}
