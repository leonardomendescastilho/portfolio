import { motion } from 'motion/react';

export const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<motion.footer
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, delay: 1.9, ease: 'linear' }}
			className="text-xs md:text-sm border-t w-full pt-2 px-4 text-center"
			role="contentinfo"
			aria-label="Rodapé do site"
		>
			<p>
				<span aria-hidden="true">&copy;</span> {currentYear} Leonardo Mendes de Castilho. Todos os direitos
				reservados.
			</p>
		</motion.footer>
	);
};
