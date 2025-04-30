import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { TooltipInfo } from './TooltipInfo';
import { SOCIAL_MEDIA } from '@/data';

const AnimatedButton = motion(Button);

export const Contact = () => {
	return (
		<section aria-labelledby="contact-heading">
			<h3 id="contact-heading" className="sr-only">Redes Sociais</h3>
			<nav aria-label="Redes Sociais">
				<ul className="flex gap-2">
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
										className="bg-primary text-xs md:text-sm hover:bg-chart-1 transition-all duration-150"
										variant={'default'}
										size={'icon'}
										asChild
									>
										<a 
											href={item.href}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={`Visite meu perfil no ${item.tooltip}`}
										>
											{item.social}
										</a>
									</AnimatedButton>
								</TooltipInfo>
							</li>
						);
					})}
				</ul>
			</nav>
		</section>
	);
};
