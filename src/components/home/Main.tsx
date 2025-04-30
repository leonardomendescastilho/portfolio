import { Contact } from '@/components/shared/Contact';
import { TechStack } from '@/components/home/TechStack';
import { ProfileDetails } from './ProfileDetails';
import { Resume } from '../shared/Resume';

export const Main = () => {
	return (
		<main className="mx-auto px-4 py-6 flex flex-col items-center justify-around text-center gap-30" aria-labelledby="profile-heading">
			<span id="profile-heading" className="sr-only">Portfolio de Leonardo Mendes</span>
			<div>
				<ProfileDetails />
				<TechStack />
				<Resume />
			</div>
			<Contact />
		</main>
	);
};
