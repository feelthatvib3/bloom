import type { Metadata } from 'next';

import { Space_Grotesk } from 'next/font/google';

import './globals.css';
import Navbar from '@/components/navbar/Navbar';

const spaceGrotest = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'React Garden',
	description: 'An e-commerce website for garden goods.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${spaceGrotest.className} bg-lime-100`}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
