import logoImage from '../assets/logo.svg';

export default function Logo() {
    return (
        <a href="/">
            <img
                src={logoImage}
                alt="React Garden Logo"
                className="h-11 w-11 lg:h-[70px] lg:w-[70px]"
            />
        </a>
    );
}
