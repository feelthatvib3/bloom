interface NavigationButtonProps {
    text: string;
    href: string;
    className?: string;
}

export default function NavigationButton({
    text,
    href,
    className,
}: NavigationButtonProps) {
    return (
        <a
            href={href}
            className={`flex shrink-0 items-center justify-center rounded-md border border-divider px-4 py-2 text-sm font-medium text-darkgray transition-colors hover:bg-lightgray active:bg-transparent active:text-black ${className ?? ''}`}
        >
            {text}
        </a>
    );
}
