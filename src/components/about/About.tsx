import imageAbout from '@/assets/about-image.png';

export const About = () => {
	return (
		<section
			className="w-full max-w-[100%]  flex items-center justify-center p-4 border rounded-md overflow-hidden bg-background"
			aria-labelledby="about-heading"
			id="about"
		>
			<article className="w-full flex flex-col md:flex-row gap-6 items-start justify-start overflow-y-auto  custom-scrollbar max-h-[60vh]">
				<h2 id="about-heading" className="sr-only">Sobre Leonardo Mendes</h2>
				
				<div className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] shrink-0 mx-auto md:mx-0 md:w-1/4 flex items-start justify-center pt-2 pb-4 md:pb-0">
					<img
						className="w-full h-auto rounded-lg shadow-md object-cover"
						src={imageAbout}
						alt="Leonardo Mendes, desenvolvedor front-end"
						width="150"
						height="150"
						loading="lazy"
					/>
				</div>

				<div className="w-full md:w-3/4 space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed pt-0 md:pt-2">
					<p>
						Olá, eu sou{' '}
						<strong className="font-semibold text-primary">
							Leonardo Mendes
						</strong>
						, desenvolvedor front-end de São José dos Campos. Meu foco é criar{' '}
						<strong className="font-semibold text-primary">
							soluções elegantes
						</strong>{' '}
						com tecnologias modernas. Curso{' '}
						<strong className="font-semibold text-primary">
							Análise e Desenvolvimento de Sistemas
						</strong>{' '}
						na UNINTER, fortalecendo minha base técnica, e complementei meu
						aprendizado com cursos pontuais, nacionais e internacionais.
					</p>
					<p>
						Tenho mais de{' '}
						<strong className="font-semibold text-primary">
							um ano de experiência em front-end
						</strong>
						, dominando{' '}
						<strong className="font-semibold text-primary">
							React, JavaScript, TypeScript, HTML5 e CSS3
						</strong>
						, trabalhando com APIs e bancos de dados como PostgreSQL. Entre
						projetos pessoais e freelas, destaco o{' '}
						<strong className="font-semibold text-primary">SIOGA</strong>,
						criado para a FURNAS, onde desenvolvi{' '}
						<strong className="font-semibold text-primary">
							interfaces dinâmicas, tabelas e gráficos
						</strong>
						, otimizando a experiência com boas práticas.
					</p>
					<p>
						Fora da programação, pratico{' '}
						<strong className="font-semibold text-primary"> meditação </strong>,
						o que me ajuda a manter o foco e a clareza ao desenvolver interfaces
						que priorizam a experiência do usuário.{' '}
					</p>
					<p>
						Na tecnologia, quero crescer como profissional, unindo habilidades
						técnicas e{' '}
						<strong className="font-semibold text-primary">
							gestão de pessoas
						</strong>
						. Almejo{' '}
						<strong className="font-semibold text-primary">
							liderar projetos e equipes
						</strong>
						, contribuindo para soluções que impactem positivamente empresas e
						usuários.
					</p>
				</div>
			</article>
		</section>
	);
};
