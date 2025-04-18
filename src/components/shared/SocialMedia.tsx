import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { SOCIAL_MEDIA } from '../utils/data';
import { TooltipInfo } from './TooltipInfo';

const AnimatedButton = motion(Button);

export const SocialMedia = () => {
	return (
		<nav aria-label="Redes Sociais">
			<ul className="flex gap-3">
				{SOCIAL_MEDIA.map((item, index) => {
					return (
						<li key={index}>
							<TooltipInfo tip={item.tooltip}>
								<AnimatedButton
									initial={{ opacity: 0, scale: 0 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{
										duration: index * 0.1,
										delay: 1.75,
										ease: 'easeInOut',
									}}
									className="bg-primary hover:opacity-70"
									variant={'default'}
									size={'icon'}
									asChild
								>
									<a 
										href={item?.href}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={`Visite meu perfil no ${item.tooltip}`}
									>
										{item?.social}
									</a>
								</AnimatedButton>
							</TooltipInfo>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
