import { ButtonHTMLAttributes, ReactNode } from 'react';
import { VariantProps, cva } from 'class-variance-authority';

const buttonStyles = cva(
    ['flex', 'justify-center', 'items-center', 'rounded-md', 'transition-all'],
    {
        variants: {
            intent: {
                primary: [
                    'bg-accent',
                    'text-white',
                    'text-lg',
                    'font-semibold',
                    'px-[52px]',
                    'py-3',
                    'lg:text-xl',
                    'lg:px-14',
                    'lg:py-4',
                    'hover:bg-black',
                ],
                banner: [
                    'text-black',
                    'text-lg',
                    'font-semibold',
                    'px-[52px]',
                    'py-3',
                    'lg:text-xl',
                    'lg:px-14',
                    'lg:py-4',
                ],
                titleLink: [
                    'shrink-0',
                    'bg-white',
                    'text-darkgray',
                    'text-sm',
                    'md:text-base',
                    'font-medium',
                    'border',
                    'border-divider',
                    'px-4',
                    'py-2',
                    'hover:bg-lightgray',
                    'active:text-black',
                    'active:bg-white',
                ],
                link: [
                    'bg-white',
                    'text-darkgray',
                    'text-sm',
                    'font-medium',
                    'border',
                    'border-divider',
                    'px-6',
                    'py-3',
                    'hover:bg-lightgray',
                    'active:text-black',
                ],
                breadcrumb: [
                    'rounded-md',
                    'border',
                    'border-divider',
                    'px-4',
                    'py-2',
                    'font-medium',
                    'text-sm',
                    'text-darkgray',
                    'hover:bg-lightgray',
                    'active:text-black',
                    'transition-colors',
                ],
            },
        },
        defaultVariants: {
            intent: 'primary',
        },
    },
);

type ButtonStylesProps = VariantProps<typeof buttonStyles>;

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        ButtonStylesProps {
    intent?: ButtonStylesProps['intent'];
    children?: ReactNode;
    className?: string;
}

export default function Button({
    intent,
    children,
    className = '',
    ...props
}: ButtonProps) {
    return (
        <button
            className={`${buttonStyles({ intent })} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
