import { useState } from 'react';
import logoImage from '../assets/logo.svg';
import { navigationLinks } from '../data/navigation';
import CartButton from './CartButton';
import MobileMenu from './MobileMenu';
import MobileMenuButton from './MobileMenuButton';
import Container from './Container';

export default function Header() {
    const [isMobileMenuOpened, setIsMobileMenuOpened] =
        useState<boolean>(false);
    return (
        <header className="fixed z-50 w-full border-b bg-white">
            <Container className="flex items-center justify-between py-3 lg:py-5 xl:py-7">
                <div>
                    <a href="/">
                        <img
                            src={logoImage}
                            alt="React Garden Logo"
                            className="h-11 w-11 lg:h-[70px] lg:w-[70px]"
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
                    <CartButton />
                    <MobileMenuButton
                        isMobileMenuOpened={isMobileMenuOpened}
                        setIsMobileMenuOpened={setIsMobileMenuOpened}
                    />
                </div>
            </Container>
            <MobileMenu
                isMobileMenuOpened={isMobileMenuOpened}
                setIsMobileMenuOpened={setIsMobileMenuOpened}
            />
        </header>
    );
}
