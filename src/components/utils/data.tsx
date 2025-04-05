import {
	
	Github,
	Mail,
	Linkedin,
	MessageCircle,
	Instagram,
} from 'lucide-react';

export const TECH_STACK = [
	'React',
	'JavaScript',
	'TypeScript',
	'Tailwind',
	'CSS3',
	'HTML5',
	'Next.js',
	'Node.js',
	'Express',
	'PostgreSQL',
	'MySQL',
	'MongoDB',
];

export const SOCIAL_MEDIA = [
	{
		social: <Linkedin />,
		href: 'www.linkedin.com/in/leonardodevcastilho',
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
		social: <Mail />,
		href: 'mailto:leonardo.mendescastilh@gmail.com',
		tooltip: 'Ir para o E-mail',
	},
	{
		social: <MessageCircle />,
		href: 'https://wa.me/+5512982242771',
		tooltip: 'Ir para o WhatsApp',
	},
];
