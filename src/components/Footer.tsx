import instagramImage from '../assets/instagram.svg';
import whatsappImage from '../assets/whatsapp.svg';
import Container from './Container';
import Title from './Title';

export default function Footer() {
    return (
        <footer>
            <Container className="py-3">
                <Title>Contact</Title>
                <div className="mt-6 grid grid-cols-1 gap-y-3 lg:mt-8 lg:grid-cols-3 lg:gap-x-3 xl:grid-cols-4 2xl:grid-cols-5">
                    <div className="rounded-xl bg-lightgray px-5 py-6 lg:col-span-2 2xl:col-span-3">
                        <p className="mb-3 text-lg text-darkgray">Phone</p>
                        <a
                            href="tel:+499999999999"
                            className="text-[28px] font-semibold lg:text-[40px]"
                            rel="noreferrer"
                        >
                            +49 999 999 99 99
                        </a>
                    </div>
                    <div className="flex flex-col rounded-xl bg-lightgray px-5 py-6 xl:col-span-2">
                        <p className="mb-4 mr-5 text-lg text-darkgray lg:mr-0">
                            Socials
                        </p>
                        <div className="flex gap-x-3 lg:gap-x-4">
                            <a
                                href="https://www.instagram.com/startainstitute/"
                                rel="noreferrer"
                            >
                                <img
                                    src={instagramImage}
                                    alt="Instagram Brand Logo"
                                />
                            </a>
                            <a href="https://whatsapp.com/" rel="noreferrer">
                                <img
                                    src={whatsappImage}
                                    alt="WhatsApp Brand Logo"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="rounded-xl bg-lightgray px-5 py-6 lg:col-span-2 2xl:col-span-3">
                        <p className="mb-3 text-lg text-darkgray">Address</p>
                        <a
                            href="https://www.google.com/maps/place/Starta+Institute+by+Tel-Ran/@52.5079337,13.374401,249m/data=!3m3!1e3!4b1!5s0x47a851cbc6be2f3b:0x7edf0a3a9c29227c!4m6!3m5!1s0x47a8515353a68755:0xd0866511db4f838f!8m2!3d52.5079329!4d13.3750447!16s%2Fg%2F11sb3nrbfl?entry=ttu"
                            className="text-[28px] font-semibold lg:text-[40px]"
                            rel="noreferrer"
                        >
                            Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland
                        </a>
                    </div>
                    <div className="rounded-xl bg-lightgray px-5 py-6 xl:col-span-2">
                        <p className="mb-3 text-lg text-darkgray">
                            Working Hours
                        </p>
                        <p className="text-[28px] font-semibold lg:text-[40px]">
                            24 hours a day
                        </p>
                    </div>
                </div>
                <div className="mt-3">
                    <iframe
                        title="TelRan.de Google Map"
                        className="h-[250px] w-full rounded-xl 2xl:h-[350px]"
                        src="https://maps.google.com/maps?width=100%25&amp;height=250&amp;hl=en&amp;q=Tel-Ran.de+(Tel-Ran.de)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    >
                        <a
                            href="https://www.maps.ie/population/"
                            rel="noreferrer"
                        >
                            Population calculator map
                        </a>
                    </iframe>
                </div>
            </Container>
        </footer>
    );
}
