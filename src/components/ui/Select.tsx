import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface SelectProps {
    options: Option[];
    onSelect: (option: Option) => void;
}

export interface Option {
    value: string;
    label: string;
}

export default function Select({ options, onSelect }: SelectProps) {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<Option>(options[0]);

    const { pathname } = useLocation();

    const toggleDropdown = () => setIsOpened(!isOpened);

    const handleSelectOption = (option: Option) => {
        setSelectedOption(option);
        onSelect(option);
        setIsOpened(false);
    };

    useEffect(() => {
        return () => {
            setSelectedOption(options[0]);
        };
    }, [pathname]);
    return (
        <div className="relative w-[200px]">
            <div
                onClick={toggleDropdown}
                className="flex shrink-0 cursor-pointer items-center justify-between gap-x-2 rounded-md border border-divider bg-white py-2 pl-4 pr-2"
            >
                <span>{selectedOption.label}</span>
                <div className="flex shrink-0 items-center justify-center">
                    <span
                        className={`${isOpened ? 'translate-x-[2.35px] -rotate-45' : 'translate-x-[2.35px] rotate-45'} h-[2px] w-3 rounded-full bg-black`}
                    ></span>
                    <span
                        className={`${isOpened ? '-translate-x-[2.35px] rotate-45' : '-translate-x-[2.35px] -rotate-45'} h-[2px] w-3 rounded-full bg-black`}
                    ></span>
                </div>
            </div>
            {isOpened && (
                <div className="absolute z-10 flex w-full flex-col gap-y-1 rounded-md bg-white p-4">
                    {options.map((option: Option) => (
                        <div
                            key={option.value}
                            onClick={() => handleSelectOption(option)}
                            className={`${selectedOption.value === option.value ? 'text-black' : 'text-darkgray hover:text-black'} cursor-pointer font-medium transition-colors`}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
