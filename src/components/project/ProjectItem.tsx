import { SquareArrowOutUpRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';

const TECH_BADGE_LIST = ['Next.js', 'Prisma', 'Stripe'];
const title = 'E-commerce Platform';

export const ProjectItem = () => {
	return (
		<article className="flex flex-col border-secondary group rounded-sm">
			<div className='overflow-hidden rounded-t h-38 md:h-auto'>
				<img
					className="object-cover w-full transition-all duration-300 ease-in-out brightness-80 group-hover:brightness-100 group-hover:scale-105"
					src="https://i.redd.it/d2hd73xxwvaa1.jpg"
					alt={`Screenshot do projeto ${title}`}
					loading="lazy"
				/>
			</div>

			<div className="flex flex-col gap-4 border p-2">
				<div className="flex flex-col gap-2 tracking-tight mb-3">
					<h3 className="text-lg md:text-xl group-hover:text-chart-1 transition-all duration-300 ease-in-out font-semibold">
						E-commerce Platform
					</h3>
					<p className="text-xs md:text-sm text-muted-foreground">
						A full-stack e-commerce platform built with Next.js, Prisma, and
						Stripe integration. A full-stack e-commerce platform built with
						Next.js, Prisma, and Stripe integration.
					</p>
				</div>

				<div className='border'>
					<ul className='flex flex-wrap gap-1'>
					{TECH_BADGE_LIST.map((item, index) => {
						return (
							<li key={index}>
								<Badge className="text-sm" key={index} aria-label={`Tecnologia: ${item}`}>{item}</Badge>
							</li>
						) 
						
					})}
					</ul>
				</div>

				<div className="flex gap-2 items-center justify-center text-xs md:text-sm tracking-tight text-foreground font-semibold">
					<a
						className="flex items-center gap-1 hover:text-chart-1 transition-all duration-150 ease-in-out hover:underline"
						href="#"
						aria-label={`Visitar o site do projeto ${title}`}
						rel="noopener noreferrer"
						target="_blank"
					>
						<span>Abrir</span>
						<SquareArrowOutUpRight size={14} />
					</a>
				</div>
			</div>
		</article>
	);
};
