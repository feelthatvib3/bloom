import { useState } from 'react';
import logoImage from '../assets/logo.svg';
import { navigationLinks } from '../data/navigation';
import Cart from './Cart';
import MobileMenu from './MobileMenu';
import MobileMenuButton from './MobileMenuButton';

export default function Header() {
    const [isMobileMenuOpened, setIsMobileMenuOpened] =
        useState<boolean>(false);
    return (
        <header className="fixed z-50 w-full border-b">
            <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-5 py-3">
                <div>
                    <a href="/">
                        <img
                            src={logoImage}
                            alt="React Garden Logo"
                            width={44}
                            height={44}
                        />
                    </a>
                </div>
                <nav className="hidden lg:block">
                    <ul className="flex gap-x-5 xl:gap-x-8">
                        {navigationLinks.map(
                            ({ name, href }, index: number) => (
                                <li key={index}>
                                    <a
                                        href={href}
                                        className="text-xl font-medium text-black transition-colors hover:text-accent"
                                    >
                                        {name}
                                    </a>
                                </li>
                            ),
                        )}
                    </ul>
                </nav>
                <div className="flex items-center gap-x-5">
                    <Cart />
                    <MobileMenuButton
                        isMobileMenuOpened={isMobileMenuOpened}
                        setIsMobileMenuOpened={setIsMobileMenuOpened}
                    />
                </div>
            </div>
            <MobileMenu
                isMobileMenuOpened={isMobileMenuOpened}
                setIsMobileMenuOpened={setIsMobileMenuOpened}
            />
        </header>
    );
}
