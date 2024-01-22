import { Dispatch, SetStateAction } from 'react';
import closeButton from '../assets/close.svg';
import { navigationLinks } from '../data/navigation';

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
            <div className="ml-auto h-full w-3/5 bg-white pl-8 pr-5 pt-3">
                <img
                    src={closeButton}
                    alt="Close Button"
                    width={44}
                    height={44}
                    className="ml-auto cursor-pointer"
                    onClick={() => setIsMobileMenuOpened(!isMobileMenuOpened)}
                />
                <nav>
                    <ul className="space-y-9 pt-11">
                        {navigationLinks.map(
                            ({ name, href }, index: number) => (
                                <li key={index}>
                                    <a
                                        href={href}
                                        className="text-2xl font-medium text-black transition-colors hover:text-accent"
                                        onClick={() =>
                                            setIsMobileMenuOpened(
                                                !isMobileMenuOpened,
                                            )
                                        }
                                    >
                                        {name}
                                    </a>
                                </li>
                            ),
                        )}
                    </ul>
                </nav>
            </div>
        </div>
    );
}
