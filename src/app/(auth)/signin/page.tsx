import { buttonVariants } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';
import SignIn from '../../../components/auth/SignIn';

interface pageProps {}

export default function page({}: pageProps) {
	return (
		<div className='absolute inset-0'>
			<div className='h-full max-w-xl mx-auto flex flex-col items-center justify-center gap-20'>
				<Link
					href='/'
					className={cn(buttonVariants({ variant: 'ghost' }), 'flex items-center gap-2 self-start')}
				>
					<ArrowLeftIcon size={16} />
					Home
				</Link>

				<SignIn />
			</div>
		</div>
	);
}
