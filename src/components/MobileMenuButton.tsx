import { Dispatch, SetStateAction } from 'react';
import menuImage from '../assets/menu.svg';

interface MobileMenuButtonProps {
    isMobileMenuOpened: boolean;
    setIsMobileMenuOpened: Dispatch<SetStateAction<boolean>>;
}

export default function MobileMenuButton({
    isMobileMenuOpened,
    setIsMobileMenuOpened,
}: MobileMenuButtonProps) {
    return (
        <img
            src={menuImage}
            alt="Mobile Menu Image"
            width={44}
            height={44}
            onClick={() => setIsMobileMenuOpened(!isMobileMenuOpened)}
            className="block cursor-pointer lg:hidden"
        />
    );
}
