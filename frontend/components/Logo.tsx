import Image from 'next/image';

export default function Logo() {
	return (
		<Image
			src="/logo.svg"
			alt="React Garden Brand"
			width={32}
			height={32}
			className="h-8 w-8"
		/>
	);
}
