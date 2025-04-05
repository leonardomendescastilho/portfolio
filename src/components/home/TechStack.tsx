import { Badge } from '../ui/badge';
import { TECH_STACK } from '../utils/data';
import { motion } from 'motion/react';

const AnimatedBadge = motion(Badge);

export const TechStack = () => {
	return (
		<section aria-labelledby="tech-stack-heading">
			<h3 id="tech-stack-heading" className="sr-only">Tecnologias e Habilidades</h3>
			<ul className="grid grid-cols-4 grid-rows-auto md:grid-cols-6 md:grid-rows-auto gap-1 md:gap-2 mt-1" role="list" aria-label="Lista de tecnologias">
				{TECH_STACK.map((item, index) => {
					return (
						<li key={index}>
							<AnimatedBadge
								initial={{ opacity: 0, scale: 0 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{
									duration: index * 0.1,
									delay: 1.2,
									ease: 'easeInOut',
								}}
								className="w-17 py-1 text-[10px] md:text-xs"
								variant={'default'}
							>
								{item}
							</AnimatedBadge>
						</li>
					);
				})}
			</ul>
		</section>
	);
};
