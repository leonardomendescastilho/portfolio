import { SocialMedia } from '@/components/shared/SocialMedia';
import { TechStack } from '@/components/home/TechStack';
import { ProfileDetails } from './ProfileDetails';
import { Resume } from '../shared/Resume';

export const Main = () => {
	return (
		<main className="flex flex-col gap-4 items-center w-full" aria-labelledby="profile-heading">
			<span id="profile-heading" className="sr-only">Portfolio de Leonardo Mendes</span>
			<ProfileDetails />
			<TechStack />
			<div className="flex w-full justify-center items-center mt-10 mb-30">
				<Resume />
			</div>
			<SocialMedia />
		</main>
	);
};
