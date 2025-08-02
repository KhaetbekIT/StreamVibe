import type { PageType } from "@/types/type";
import { Carousel } from "./_components/carousel";

const Page: PageType = () => {
	return (
		<div className="space-y-[150px] pt-[120px] pb-[130px]">
			<Carousel />
		</div>
	);
};

export default Page;
