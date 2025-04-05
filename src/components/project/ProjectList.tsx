import { ProjectItem } from './ProjectItem';

const PROJECTS_DATA = Array.from({ length: 8 }, (_, index) => index);

export const ProjectList = () => {
	return (
		<section className="overflow-hidden border rounded-sm p-6" 	aria-labelledby="projects-heading">
			<h2 id="projects-heading" className="sr-only">Meus Projetos</h2>
			<div className="h-[600px] md:h-[500px] overflow-y-auto pr-6 custom-scrollbar" aria-label="Lista de projetos" tabIndex={0}>
				<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-4">
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
