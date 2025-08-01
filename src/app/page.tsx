import type { PageType } from "@/types/type";
import { Catalog } from "./_components/catalog";
import { FAQs } from "./_components/faqs";
import { Header } from "./_components/header";

const Page: PageType = () => {
	return (
		<div className="space-y-[150px]">
			<Header />

			<Catalog />

			<FAQs />
		</div>
	);
};

export default Page;
