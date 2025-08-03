import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Groups } from "@/components/groups";
import { Button } from "@/components/ui/button";
import { Routers } from "@/configs/routers.config";
import type { Catalog as CatalogType } from "@/types/catalog.type";

export const Catalog = ({ catalog }: Props) => {
	return (
		<div className="py-[30px] px-5 rounded-xl bg-black-10 space-y-2">
			<div className="flex gap-1 flex-wrap justify-center relative">
				{catalog.images.map((image, index) => (
					<div
						className="shrink-0 w-[100px] h-[120px] overflow-hidden rounded-md"
						key={`catalog-${index.toString()}`}
					>
						<Image
							src={image}
							alt={`catalog-${index}`}
							priority
							width={100}
							height={120}
							className="object-center object-cover "
						/>
					</div>
				))}

				<div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end bg-gradient-to-b from-black-08/40 to-black-08 ">
					{catalog.isTop && (
						<Button color="red" className="w-fit">
							Top 10 In
						</Button>
					)}
				</div>
			</div>

			<Groups className="flex-row items-center justify-between gap-1">
				<p className="text-white font-semibold text-base">{catalog.label}</p>

				<Link
					href={{
						pathname: Routers.categoriesPage.to,
						query: {
							catalogId: catalog.id,
						},
					}}
					className="group"
				>
					<ArrowRight className="size-6 text-white/70 group-hover:text-white" />
				</Link>
			</Groups>
		</div>
	);
};

interface Props {
	catalog: CatalogType;
}
