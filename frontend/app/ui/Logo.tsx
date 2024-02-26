'use client';

import Link from 'next/link';
import { cn } from '@/app/lib/utils';

interface LogoProps {
	className?: string;
}

export default function Logo({ className }: LogoProps) {
	return (
		<Link href="/" className={cn('font-heading text-3xl uppercase', className)}>
			Bloom
		</Link>
	);
}
