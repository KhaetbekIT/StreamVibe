import type { PageType } from "@/types/type";
import { SectionCards } from "./_components/section-cards";
import { SocialsSettings } from "./_components/socials-settings";

const Page: PageType = async () => {
	return (
		<section className="space-y-5">
			<SectionCards />

			<SocialsSettings />
		</section>
	);
};

export default Page;
