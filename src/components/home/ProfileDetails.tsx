import PerfilImagem from '@/assets/perfil.jpeg';
import { motion } from 'motion/react';

export const ProfileDetails = () => {
	return (
		<>
			<div className="overflow-hidden rounded-full w-[200px] sm:w-[240px] md:w-[250px] text-center" aria-label="Imagem de perfil">
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

			<div className="flex flex-col gap-9" aria-label="Informações de perfil">
				<div className="flex flex-col gap-1">
					<motion.h1
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: 0.7, ease: 'easeInOut' }}
						className="text-3xl md:text-5xl font-bold tracking-tight "
					>
						Leonardo Mendes
					</motion.h1>
					<motion.h2
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: 0.85, ease: 'easeInOut' }}
						className="text-xl md:text-2xl font-semibold tracking-tighter text-primary"
					>
						Frontend Developer
					</motion.h2>
				</div>

				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 1.05, ease: 'easeInOut' }}
					className="text-balance text-sm md:text-lg/6 mb-2 tracking-tight max-w-2xl text-muted-foreground"
					tabIndex={0}
					aria-label="Descrição do perfil"
				>
					Especializado em criar interfaces intuitivas e responsivas com React,
					JavaScript e TypeScript, focando em performance e acessibilidade.
					Apaixonado por transformar ideias em experiências digitais que
					melhorem a experiência do usuário.
				</motion.p>
			</div>
		</>
	);
};
