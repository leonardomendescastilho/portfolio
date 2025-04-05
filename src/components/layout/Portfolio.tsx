import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from '../home/Main';

export const Portfolio = () => {
	return (
		<div className="flex flex-col justify-around items-center min-h-dvh gap-6 ">
			<div className="w-full max-w-7xl">
				<Header />	
			</div>
			<div className="flex  text-center px-4 w-full  max-w-7xl mx-auto">
				<Main />
			</div>

			<div>
				<Footer />
			</div>
		</div>
	);
};
