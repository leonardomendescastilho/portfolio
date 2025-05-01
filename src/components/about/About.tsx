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
    Olá! Sou{' '}
    <strong className="font-semibold text-primary">Leonardo Mendes</strong>,
    desenvolvedor de São José dos Campos. Comecei minha jornada na web com{' '}
    <strong className="font-semibold text-primary">HTML, CSS e JavaScript</strong>,
    e foi com o <strong className="font-semibold text-primary">React</strong> que me apaixonei pelo
    desenvolvimento de interfaces. Com o tempo, venho expandindo meu conhecimento no
    <strong className="font-semibold text-primary"> back-end</strong>, explorando o{' '}
    <strong className="font-semibold text-primary">ecossistema Node.js</strong>,{' '}
    <strong className="font-semibold text-primary">APIs</strong> e{' '}
    <strong className="font-semibold text-primary">bancos de dados relacionais e não relacionais</strong>.
  </p>
  <p>
    Curso{' '}
    <strong className="font-semibold text-primary">Análise e Desenvolvimento de Sistemas</strong>{' '}
    pela UNINTER, complementando minha formação com cursos nacionais e internacionais. Tenho
    experiência em projetos pessoais e profissionais — destaque para o{' '}
    <strong className="font-semibold text-primary">SIOGA</strong>, desenvolvido para a FURNAS. Nesse
    projeto, atuei no desenvolvimento de{' '}
    <strong className="font-semibold text-primary">interfaces interativas, tabelas e gráficos dinâmicos</strong>,
    com foco na{' '}
    <strong className="font-semibold text-primary">melhoria da performance e da usabilidade</strong>. Trabalhei na{' '}
    <strong className="font-semibold text-primary">estruturação e adaptação de dados</strong> provenientes de uma{' '}
    <strong className="font-semibold text-primary">API RESTful</strong>, além de participar ativamente da{' '}
    <strong className="font-semibold text-primary">escolha de tecnologias</strong>, contribuindo com decisões sobre{' '}
    <strong className="font-semibold text-primary">componentização, responsividade</strong> e{' '}
    <strong className="font-semibold text-primary">carregamento eficiente</strong> dos dados.
  </p>
  <p>
    Fora da tecnologia, sou praticante de{' '}
    <strong className="font-semibold text-primary">meditação</strong> e valorizo momentos em contato com a{' '}
    <strong className="font-semibold text-primary">natureza</strong> e com minha{' '}
    <strong className="font-semibold text-primary">família</strong> — pilares que reforçam meu foco, clareza e equilíbrio no trabalho.
  </p>
  <p>
    Meu objetivo vai além da técnica: quero evoluir como profissional capaz de{' '}
    <strong className="font-semibold text-primary">liderar projetos</strong>,{' '}
    <strong className="font-semibold text-primary">colaborar com times multidisciplinares</strong> e atuar de forma{' '}
    <strong className="font-semibold text-primary">estratégica</strong> no desenvolvimento de{' '}
    <strong className="font-semibold text-primary">produtos que façam a diferença</strong>.
  </p>
				</div>

			</article>
		</section>
	);
};
