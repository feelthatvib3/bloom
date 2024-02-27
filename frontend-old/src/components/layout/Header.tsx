import { useState } from 'react';
import CartButton from '../ui/CartButton';
import MobileMenu from './MobileMenu';
import MobileMenuButton from '../MobileMenuButton';
import Container from './Container';
import Logo from '../ui/Logo';
import NavigationLink from '../ui/NavigationLink';
import { NavigationLink as NavigationLinkType } from '../../definitions';
import { navigationLinks } from '../../data/navigationLinks';

export default function Header() {
    const [isMobileMenuOpened, setIsMobileMenuOpened] =
        useState<boolean>(false);
    return (
        <header className="fixed z-50 w-full border-b bg-white">
            <Container className="flex items-center justify-between py-3 lg:py-5 xl:py-7">
                <Logo />
                <nav className="hidden lg:block">
                    <ul className="flex gap-x-5 xl:gap-x-8">
                        {navigationLinks.map(
                            (
                                navigationLink: NavigationLinkType,
                                index: number,
                            ) => (
                                <NavigationLink
                                    key={index}
                                    navigationLink={navigationLink}
                                />
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
