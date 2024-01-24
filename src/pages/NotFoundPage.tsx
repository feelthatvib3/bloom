import errorImage from '../assets/404.svg';
import Button from '../components/Button';
import Container from '../components/Container';
import Title from '../ui/Title';

export default function NotFoundPage() {
    return (
        <main>
            <Container className="flex max-w-screen-lg flex-col items-center justify-center py-20 text-center">
                <img src={errorImage} alt="404 Error" />
                <div className="py-8">
                    <Title text="Page Not Found" />
                    <p className="pt-4 text-xl text-darkgray">
                        We're sorry, the page you requested could not be found.
                        Please go back to the homepage.
                    </p>
                </div>
                <Button href="/" className="max-w-fit">
                    Go Home
                </Button>
            </Container>
        </main>
    );
}
