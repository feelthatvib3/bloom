import { FC } from 'react';
import Image from 'next/image';

const Logo: FC = () => {
	return (
		<Image src="/logo.svg" alt="React Garden Brand" width={44} height={44} />
	);
};

export default Logo;
