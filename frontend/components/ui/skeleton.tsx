import { cn } from '@/lib/utils';

function Skeleton({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={cn('animate-pulse bg-lime-950/20', className)} {...props} />
	);
}

export { Skeleton };
