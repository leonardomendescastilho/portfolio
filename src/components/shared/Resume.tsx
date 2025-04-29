import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Download } from 'lucide-react';

const AnimatedButton = motion(Button);

export const Resume = () => {
	return (
		<section aria-labelledby="curriculo-heading" className="my-10">
			<h3 id="curriculo-heading" className="sr-only">Download Curriculo</h3>
			<a
				href="/public/cv_leonardo.pdf"
				download={'curriculo-leonardo.pdf'}
				aria-label="Baixar currículo em formato PDF"
				rel="noopener noreferrer"
				target="_blank"
			>
				<AnimatedButton
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 2.3, ease: 'easeInOut' }}
					className="bg-chart-2 text-xs md:text-sm"
					variant={'default'}
					size={window.innerWidth >= 768 ? 'lg' : 'sm'}
					aria-label="Baixar currículo em formato PDF"
				>
					Baixar Currículo
					<Download size={16} aria-hidden="true" className="ml-1" />
				</AnimatedButton>
			</a>
		</section>
	);
};
