import { useLocation } from 'react-router-dom';
import NavigationButton from './NavigationButton';
import capitalize from '../utils/capitalize';

export default function Breadcrumb() {
    const location = useLocation();
    console.log(location);
    const pathnames = location.pathname
        .split('/')
        .filter((pathname) => pathname)
        .map(capitalize);

    return (
        <div className="flex">
            <NavigationButton text="Main page" href="/" />
            {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;

                return (
                    <div key={name} className="flex items-center">
                        <div className="h-[1px] w-4 bg-divider"></div>
                        {isLast ? (
                            <NavigationButton
                                text={name}
                                href=""
                                breadcrumbLastItem
                            />
                        ) : (
                            <NavigationButton text={name} href="/" />
                        )}
                    </div>
                );
            })}
        </div>
    );
}
