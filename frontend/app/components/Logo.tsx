import { FC } from 'react';
import Image from 'next/image';

const Logo: FC = () => {
	return (
		<Image src="/logo.svg" alt="React Garden Brand" width={36} height={36} />
	);
};

export default Logo;
