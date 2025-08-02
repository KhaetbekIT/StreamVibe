import type { PageType } from "@/types/type";
import { Carousel } from "./_components/carousel";
import { Genres } from "./_components/genres";

const Page: PageType = () => {
	return (
		<div className="space-y-[150px] pt-[120px] pb-[130px]">
			<Carousel />

			<Genres />
		</div>
	);
};

export default Page;
