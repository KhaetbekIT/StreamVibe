
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { Groups } from "@/components/groups";
import { Button } from "@/components/ui/button";

export const CatalogItem = ({ image, title, description }: Props) => {
	return (
		<div className="p-10 border border-black-15 rounded-xl space-y-6 bg-black-06">
			<Groups className="flex-row items-center gap-3">
				<Button variant={"icon"}>
					<Image src={image} alt={title} />
				</Button>

				<h4 className="text-xl font-semibold text-white">{title}</h4>
			</Groups>

			<p className="text-grey-60">{description}</p>
		</div>
	);
};

interface Props {
	image: string | StaticImport;
	title: string;
	description: string;
}
