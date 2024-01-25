import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.svg';

export default function Logo() {
    return (
        <Link to="/">
            <img
                src={logoImage}
                alt="React Garden Logo"
                className="h-11 w-11 lg:h-[70px] lg:w-[70px]"
            />
        </Link>
    );
}
