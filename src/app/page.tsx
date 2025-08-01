import type { PageType } from "@/types/type";
import { Catalog } from "./_components/catalog";
import { FAQs } from "./_components/faqs";
import { Header } from "./_components/header";
import { Plans } from "./_components/plans";
import { Trial } from "./_components/trial";

const Page: PageType = () => {
	return (
		<div className="space-y-[150px] pb-[130px]">
			<Header />

			<Catalog />

			<FAQs />

			<Plans />

			<Trial />
		</div>
	);
};

export default Page;
