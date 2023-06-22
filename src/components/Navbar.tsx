import { Icons } from './icons';

const Navbar = () => {
	return (
		<div className='fixed top-0 inset-x-0 bg-slate-100 bg-opacity-80 border-b border-b-slate-300 h-fit z-10 py-4 backdrop-blur'>
			<div className='container max-w-7xl mx-auto h-full flex items-center justify-between gap-2'>
				<Icons.logoMobile className='h-auto w-32 md:hidden' />
				<Icons.logoDesktop className='hidden h-auto w-32 md:block' />
			</div>
		</div>
	);
};

export default Navbar;
