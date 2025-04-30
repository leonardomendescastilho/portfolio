import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from '../home/Main';

export const Portfolio = () => {
	return (
		<div className="min-h-screen max-auto px-4 flex flex-col items-center justify-around">
			<Header />	
			<Main />
			<Footer />
		</div>
	);
};
