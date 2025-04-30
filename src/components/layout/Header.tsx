import { About } from '../about/About';
import { DialogModal } from '../shared/DialogModal';
import { ProjectList } from '../project/ProjectList';
import { ModeToggle } from '../ui/theme/mode-toggle';
import { motion } from 'motion/react';

export const Header = () => {
	return (
		<motion.header
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, delay: 0.4, ease: 'easeInOut' }}
			className="flex items-center justify-center md:justify-end py-1 w-full border-b max-w-7xl gap-2"
			aria-label="Cabeçalho do site"
		>
			<nav aria-label="Menu principal">
				<ul className="flex">
					<li>
						<DialogModal
							title="Projetos"
							triggerAriaLabel="Abrir modal de projetos"
							children={<ProjectList />}
						/>
					</li>
					<li>
						<DialogModal
							title="Sobre Mim"
							triggerAriaLabel="Abrir modal de sobre mim"
							children={<About />}
						/>
					</li>
				</ul>
			</nav>
			<ModeToggle />
		</motion.header>
	);
};
