import imageAbout from '@/assets/about-image.png';

export const About = () => {
	return (
		<section
			aria-labelledby="about-heading"
			id="about"
		>
			<article className="grid md:grid-cols-2 gap-4 md:justify-items-start overflow-y-auto hide-scrollbar h-[60dvh] md:h-[65dvh] border rounded-sm p-2">
				<h2 id="about-heading" className="sr-only">Sobre Leonardo Mendes</h2>
				
				<div className='flex overflow-hidden justify-self-center self-center rounded-sm h-54 sm:h-78 md:h-90 lg:h-110'>
					<img
						className="object-cover"
						src={imageAbout}
						alt="Leonardo Mendes, desenvolvedor front-end"
						loading="eager"
					/>
				</div>

				<div className="text-sm md:text-base text-muted-foreground space-y-2 leading-snug text-pretty self-center">
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
						<strong className="font-semibold text-primary">meditação</strong>,
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
