import type { Metadata } from 'next';

import { Space_Grotesk } from 'next/font/google';

import './globals.css';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { Toaster } from '@/components/ui/sonner';

import StoreProvider from '@/app/StoreProvider';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Bloom',
	description: 'An e-commerce website for garden goods.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${spaceGrotesk.className} bg-lime-100 text-lime-950`}>
				<StoreProvider>
					<Navbar />
					<main className="pb-4 pt-[calc(1rem+69px)] lg:pb-8 lg:pt-[calc(2rem+69px)]">
						{children}
					</main>
					<Footer />
					<Toaster />
				</StoreProvider>
			</body>
		</html>
	);
}
