import { ProjectItem } from './ProjectItem';

const PROJECTS_DATA = Array.from({ length: 8 }, (_, index) => index);

export const ProjectList = () => {
	return (
		<section className="border rounded-sm p-4 h-[60dvh] md:h-[65dvh]" aria-labelledby="projects-heading">
			<h2 id="projects-heading" className="sr-only">Meus Projetos</h2>
			<div className="overflow-y-auto h-full hide-scrollbar::-webkit-scrollbar hide-scrollbar" aria-label="Lista de projetos">
				<ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
					{PROJECTS_DATA.map((_, index) => {
						return (
							<li key={index}>
								<ProjectItem />
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
};
