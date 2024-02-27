import { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { navigationLinks } from '../data/navigationLinks';
import XButton from './ui/XButton';

interface MobileMenuProps {
    isMobileMenuOpened: boolean;
    setIsMobileMenuOpened: Dispatch<SetStateAction<boolean>>;
}

export default function MobileMenu({
    isMobileMenuOpened,
    setIsMobileMenuOpened,
}: MobileMenuProps) {
    return (
        <div
            className={`${isMobileMenuOpened ? 'visible opacity-100' : 'invisible opacity-0'} fixed right-0 top-0 z-50 h-full w-full bg-black/10 lg:hidden`}
            onClick={() => setIsMobileMenuOpened(!isMobileMenuOpened)}
        >
            <div className="relative ml-auto h-full w-3/5 bg-white pl-8 pr-5 pt-3">
                <XButton
                    width={44}
                    height={44}
                    className="absolute right-4 top-4"
                    onClick={() => setIsMobileMenuOpened(!isMobileMenuOpened)}
                />
                <nav>
                    <ul className="space-y-9 pt-[100px]">
                        {navigationLinks.map(
                            ({ name, href }, index: number) => (
                                <li key={index}>
                                    <Link
                                        to={href}
                                        className="text-2xl font-medium text-black transition-colors hover:text-accent"
                                        onClick={() =>
                                            setIsMobileMenuOpened(
                                                !isMobileMenuOpened,
                                            )
                                        }
                                    >
                                        {name}
                                    </Link>
                                </li>
                            ),
                        )}
                    </ul>
                </nav>
            </div>
        </div>
    );
}
