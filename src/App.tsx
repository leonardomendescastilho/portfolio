import { Portfolio } from './components/layout/Portfolio';
import { ThemeProvider } from './components/ui/theme/theme';

export const App = () => {
	return (
		<ThemeProvider
			defaultTheme="system"
			storageKey="vite-ui-theme"
		>
			<Portfolio />
		</ThemeProvider>
	);
};
