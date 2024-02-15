/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '5555',
				pathname: '/products/*',
			},
		],
	},
};

export default nextConfig;
