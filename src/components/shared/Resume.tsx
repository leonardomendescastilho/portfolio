import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Download } from 'lucide-react';

const AnimatedButton = motion(Button);

export const Resume = () => {
	return (
		<a
			href="/public/cv_leonardo.pdf"
			download={'curriculo-leonardo.pdf'}
			className="flex items-center justify-center" 
			aria-label="Baixar currículo em formato PDF"
			rel="noopener noreferrer"
			target="_blank"
		>
			<AnimatedButton
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 2.3, ease: 'easeInOut' }}
				className="cursor-pointer bg-chart-2 flex items-center gap-2 text-xs md:text-sm"
				variant={'default'}
				size={'lg'}
			>
				Baixar Currículo
				<Download size={16} aria-hidden="true" className="ml-1" />
			</AnimatedButton>
		</a>
	);
};
