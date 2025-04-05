import imageAbout from '@/assets/about-image.png';

export const About = () => {
	return (
		<section
			className="w-full flex items-center justify-center p-4 border rounded-md overflow-hidden"
			aria-labelledby="about-heading"
			id="about"
		>
			<article className="max-w-5xl w-full flex flex-col md:flex-row gap-6 items-center justify-center overflow-y-auto pr-2 custom-scrollbar h-[600px] md:h-[500px]">
				<div className="w-[200px] mt-100 md:mt-0 h-auto md:w-1/3">
					<h2 id="about-heading" className="sr-only">Sobre Leonardo Mendes</h2>
					<img
						className="w-full md:h-full rounded-lg shadow-md object-cover"
						src={imageAbout}
						alt="Leonardo Mendes, desenvolvedor front-end"
						width="200"
						height="300"
						loading="lazy"
					/>
				</div>

				<div className="w-full md:w-2/3 space-y-4 text-base text-muted-foreground leading-relaxed">
					<p tabIndex="0">
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
