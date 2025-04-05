import { Github, SquareArrowOutUpRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

import { Badge } from '@/components/ui/badge';

const TECH_BADGE_LIST = ['Next.js', 'Prisma', 'Stripe'];

const title = 'E-commerce Platform';
export const ProjectItem = () => {
	return (
		<article className="flex flex-col text-star opacity-80 hover:opacity-100 transition-opacity ease-in-out duration-500 border border-secondary group rounded-sm">
			<div>
				<img
					className="object-cover w-full h-full rounded-t"
					src="https://i.redd.it/d2hd73xxwvaa1.jpg"
					alt={`Screenshot do projeto ${title}`}
					loading="lazy"
				/>
			</div>
			<div className="flex flex-col gap-6 flex-1/2 p-2 ">
				<div className="flex flex-col gap-2">
					<h3 className="text-xl group-hover:text-chart-2 transition-all duration-300">
						E-commerce Platform
					</h3>
					<p className="text-sm ">
						A full-stack e-commerce platform built with Next.js, Prisma, and
						Stripe integration. A full-stack e-commerce platform built with
						Next.js, Prisma, and Stripe integration.
					</p>
				</div>

				<div className="flex gap-2" aria-label="Tecnologias utilizadas">
					{TECH_BADGE_LIST.map((item, index) => {
						return <Badge key={index} aria-label={`Tecnologia: ${item}`}>{item}</Badge>;
					})}
				</div>

				<div className="flex gap-3">
					<a
						className="flex gap-2 items-center hover:text-chart-2"
						href="#"
						aria-label={`Visitar o site do projeto ${title}`}
						rel="noopener noreferrer"
						target="_blank"
					>
						<span className="text-sm ">Abrir</span>
						<SquareArrowOutUpRight size={16} />
					</a>
					<Separator orientation="vertical" aria-hidden="true" />
					<a
						className="flex gap-2 items-center hover:text-chart-2"
						href="#"
						aria-label="Ver código fonte no Github"
						rel="noopener noreferrer"
						target="_blank"
					>
						<Github size={16} aria-hidden="true" />
						<span className="text-sm">Github</span>
						<SquareArrowOutUpRight size={16} aria-hidden="true"/>
					</a>
				</div>
			</div>
		</article>
	);
};
