import PerfilImagem from '@/assets/perfil.jpeg';
import { motion } from 'motion/react';

export const ProfileDetails = () => {
	return (
		<section className="flex flex-col items-center justify-center gap-4 md:gap-6 mb-10">
			<div className="overflow-hidden rounded-full w-[190px] sm:w-[200px] md:w-[245px] text-center" aria-label="Imagem de perfil">
				<motion.img
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.45, ease: 'easeInOut' }}
					className="object-cover"
					src={PerfilImagem}
					alt="Leonardo Mendes - Desenvolvedor Frontend"
					loading="eager"
				/>
			</div>

			<div className="flex flex-col gap-4 md:gap-6" aria-label="Informações de perfil">
				<div className="flex flex-col gap-1">
					<motion.h1
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: 0.7, ease: 'easeInOut' }}
						className="text-3xl md:text-4xl font-bold tracking-tight "
					>
						Leonardo Mendes
					</motion.h1>
					<motion.h2
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: 0.85, ease: 'easeInOut' }}
						className="text-xl md:text-2xl font-semibold tracking-tighter text-primary"
					>
						Frontend
					</motion.h2>
				</div>

				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 1.05, ease: 'easeInOut' }}
					className='text-balance md:text-wrap text-sm md:text-base/6 max-w-lg md:max-w-2xl mb-2 text-muted-foreground tracking-tight'
					tabIndex={0}
					aria-label="Descrição do perfil"
				>
					Sou desenvolvedor frontend com foco em ecossistema React. Tenho mais de um ano de prática, além de vivência com ecossistema Node.js, APIs e bancos de dados. Também sou entusiata de práticas meditativas e da vida em natureza.
				</motion.p>
			</div>
		</section>
	);
};
