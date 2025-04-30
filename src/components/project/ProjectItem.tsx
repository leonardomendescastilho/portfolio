import { SquareArrowOutUpRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { IProject } from '@/types';

interface ProjectItemProps {
	project: IProject
}

export const ProjectItem = ({ project }: ProjectItemProps) => {
	return (
		<article className="flex flex-col border-secondary group rounded-sm justify-center md:justify-start">
			<div className='overflow-hidden rounded-t h-38 md:h-auto'>
				<img
					className="object-cover w-full transition-all duration-300 ease-in-out brightness-80 group-hover:brightness-100 group-hover:scale-105"
					src={project.backgroundImage}
					alt={`Screenshot do projeto ${project.title}`}
					loading="lazy"
				/>
			</div>

			<div className="flex flex-col border p-2">
				<div className="flex flex-col gap-2 tracking-tight mb-3">
					<h3 className="text-lg md:text-xl group-hover:text-chart-1 transition-all duration-300 ease-in-out font-semibold text-center text-balance">
						{project.title}
					</h3>
					<p className="text-xs md:text-sm text-muted-foreground text-center text-pretty">
					{project.description}
					</p>
				</div>

				<div className='flex justify-center'>
					<ul className='flex flex-wrap gap-1'>
					{project.TechStack.map((item, index) => {
						return (
							<li key={index}>
								<Badge className="py-1 text-[10px]" key={index} aria-label={`Tecnologia: ${item}`}>{item}</Badge>
							</li>
						) 
						
					})}
					</ul>
				</div>

				<div className="flex gap-2 mt-5 items-center justify-center text-xs md:text-sm tracking-tight text-foreground font-semibold">
					<a
						className="flex items-center gap-1 hover:text-chart-1 transition-all duration-150 ease-in-out hover:underline"
						href={project.linkUrl}
						aria-label={`Visitar o site do projeto ${project.title}`}
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
