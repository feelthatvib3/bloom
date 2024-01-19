interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export default function Container({ children, className }: ContainerProps) {
    return (
        <div
            className={`mx-auto max-w-screen-2xl px-5 2xl:px-10 ${className ?? ''}`}
        >
            {children}
        </div>
    );
}
