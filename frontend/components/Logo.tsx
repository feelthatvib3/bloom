import { FC } from 'react';
import Image from 'next/image';

const Logo: FC = () => {
	return (
		<Image
			src="/logo.svg"
			alt="React Garden Brand"
			width={32}
			height={32}
			className="h-8 w-8"
		/>
	);
};

export default Logo;
