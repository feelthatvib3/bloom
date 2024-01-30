import { useLocation, useNavigate } from 'react-router-dom';
import capitalize from '../utils/capitalize';
import Button from '../components/Button';

interface BreadcrumbProps {
    lastPathname?: string;
}

export default function Breadcrumb({ lastPathname }: BreadcrumbProps) {
    const navigate = useNavigate();
    const location = useLocation();
    const pathnames = location.pathname
        .split('/')
        .filter((pathname) => pathname);
    return (
        <div className="hidden lg:flex lg:items-center">
            <Button intent="breadcrumb" onClick={() => navigate('/')}>
                Main page
            </Button>
            {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;

                return (
                    <div key={name} className="flex items-center">
                        <div className="h-[1px] w-4 bg-divider"></div>
                        {isLast ? (
                            <div className="flex shrink-0 items-center justify-center rounded-md border border-divider px-4 py-2 text-sm font-medium">
                                {capitalize(lastPathname || name)}
                            </div>
                        ) : (
                            <Button
                                intent="breadcrumb"
                                onClick={() => navigate(routeTo)}
                            >
                                {capitalize(name)}
                            </Button>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
