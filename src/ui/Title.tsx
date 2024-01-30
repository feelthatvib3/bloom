import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

interface TitleProps {
    text: string;
    link?: {
        href: string;
        text: string;
    };
}

export default function Title({ text, link }: TitleProps) {
    const navigate = useNavigate();
    return link ? (
        <div className="md:flex md:items-center md:gap-x-4 lg:gap-x-5 xl:gap-x-8">
            <h2 className="text-[40px] font-bold leading-[44px] text-black md:text-5xl md:leading-[53px] lg:text-[64px] lg:leading-[61px] xl:leading-[70px]">
                {text}
            </h2>
            <div className="hidden w-full md:flex md:items-center">
                <div className="h-[1px] w-full bg-divider"></div>
                <Button intent="titleLink" onClick={() => navigate(link.href)}>
                    {link.text}
                </Button>
            </div>
        </div>
    ) : (
        <h2 className="text-[40px] font-bold leading-[44px] text-black md:text-5xl md:leading-[53px] lg:text-[64px] lg:leading-[61px] xl:leading-[70px]">
            {text}
        </h2>
    );
}
