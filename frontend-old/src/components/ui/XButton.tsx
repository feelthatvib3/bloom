import { ButtonHTMLAttributes } from 'react';
import xIconImage from '../../assets/close.svg';

interface XButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    width?: number;
    height?: number;
    className?: string;
}

export default function XButton({
    className = '',
    width = 24,
    height = 24,
    ...props
}: XButtonProps) {
    return (
        <button {...props} className={`cursor-pointer ${className}`}>
            <img
                src={xIconImage}
                alt="X Button"
                width={width}
                height={height}
            />
        </button>
    );
}
