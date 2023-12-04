import { cn } from '@/lib/utils';
import { Button } from '../ui/Button';
import { Icons } from '../icons';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { toast } from '../ui/use-toast';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function UserAuthForm({ className, ...props }: UserAuthFormProps) {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const loginWithGoogle = async () => {
		setIsLoading(true);

		try {
			await signIn('google');
		} catch (error) {
			// toast();
		}
	};
	return (
		<div className={cn('flex justify-center', className)} {...props}>
			<Button
				isLoading={isLoading}
				type='button'
				size='sm'
				className='w-full'
				onClick={loginWithGoogle}
				disabled={isLoading}
			>
				{isLoading ? null : <Icons.google className='h-4 w-4 mr-2' />}
				Google
			</Button>
		</div>
	);
}
