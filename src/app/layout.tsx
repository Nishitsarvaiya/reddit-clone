import Navbar from '@/components/Navbar';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import { Poppins } from 'next/font/google';
import LocalFont from 'next/font/local';

export const metadata = {
	title: 'Breadit',
	description: 'A Reddit clone built with Next.js and TypeScript.',
};

// const primaryFont = Poppins({
// 	subsets: ['latin'],
// 	weight: ['300', '400', '500', '600', '700'],
// 	display: 'swap',
// });

const primaryFont = LocalFont({
	src: '../fonts/GeneralSans-Variable.ttf',
	display: 'swap',
	variable: '--font-primary',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang='en'
			className={cn('bg-white text-slate-900 antialiased', primaryFont.className, primaryFont.variable)}
		>
			<body className='min-h-screen bg-slate-50 antialiased'>
				{/* <div className='container max-w-7xl mx-auto h-full pt-12'> */}
				<Navbar />
				{children}
				{/* </div> */}
			</body>
		</html>
	);
}
