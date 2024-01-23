import { ReactNode } from 'react';

interface TitleProps {
    children: ReactNode;
    link?: {
        href: string;
        text: string;
    };
}

export default function Title({ children, link }: TitleProps) {
    return link ? (
        <div className="md:flex md:items-center md:gap-x-4 lg:gap-x-5 xl:gap-x-8">
            <h2 className="text-[40px] font-bold leading-[44px] text-black md:text-5xl md:leading-[53px] lg:text-[64px] lg:leading-[61px] xl:leading-[70px]">
                {children}
            </h2>
            <div className="hidden w-full md:flex md:items-center">
                <div className="h-[1px] w-full bg-divider"></div>
                <a
                    href={link.href}
                    className="shrink-0 rounded-md border border-divider px-4 py-2 text-sm font-medium text-darkgray transition-colors hover:bg-lightgray active:bg-transparent active:text-black"
                >
                    {link.text}
                </a>
            </div>
        </div>
    ) : (
        <h2 className="text-[40px] font-bold leading-[44px] text-black md:text-5xl md:leading-[53px] lg:text-[64px] lg:leading-[61px] xl:leading-[70px]">
            {children}
        </h2>
    );
}
