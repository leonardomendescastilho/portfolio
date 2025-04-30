import movieFinderBg from "@/assets/moviefinder-bg.webp";
import {
	Github,
	Linkedin,
	MessageCircle,
	Instagram,
} from 'lucide-react';

export const PROJECTS = [
  {
    id: '1',
    title: "MovieFinder",
    description:
      "Movie Finder é um site onde os usuários podem pesquisar filmes pelo nome em inglês, visualizar detalhes sobre eles e salvar seus filmes favoritos para consulta futura.", 
    backgroundImage: movieFinderBg,
    TechStack: ["React", "TypeScript", "Tailwind"],
    linkUrl: "https://leonardomendescastilho.github.io/MovieFinder/",
  }
]

export const TECH_STACK = ['React', 'TypeScript','JavaScript','Node.js','HTML5', 'CSS3'];

export const SOCIAL_MEDIA = [
	{
		social: <Linkedin />,
		href: 'https://www.linkedin.com/in/leonardodevcastilho',
		tooltip: 'Ir para o Linkedin',
	},
	{
		social: <Github />,
		href: 'https://github.com/leonardomendescastilho',
		tooltip: 'Ir para o GitHub',
	},
	{
		social: <Instagram />,
		href: 'https://www.instagram.com/leonardo.asdf/#',
		tooltip: 'Ir para o Instagram',
	},
	{
		social: <MessageCircle />,
		href: 'https://wa.me/+5512982242771',
		tooltip: 'Ir para o WhatsApp',
	},
];
