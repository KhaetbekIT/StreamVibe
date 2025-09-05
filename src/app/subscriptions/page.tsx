import type { PageType } from "@/types/type";
import { PriceTabs } from "./_components/price-tabs";

const Page: PageType = () => {
	return (
		<div className="space-y-[150px] pt-[120px] pb-[130px]">
			<PriceTabs />
		</div>
	);
};

export default Page;
