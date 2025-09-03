import type { PageType } from "@/types/type";
import { Trial } from "../_components/trial";
import { SupportForm } from "./_components/support-form";

const Page: PageType = () => {
	return (
		<div className="space-y-[150px] pt-[120px] pb-[130px]">
			<SupportForm />

			<Trial />
		</div>
	);
};

export default Page;
