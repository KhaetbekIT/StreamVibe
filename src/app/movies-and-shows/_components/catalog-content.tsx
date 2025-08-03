"use client";

import { Groups } from "@/components/groups";
import {
	Carousel,
	CarouselContent,
	CarouselDots,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

import type { Catalog as CatalogType } from "@/types/catalog.type";
import { Catalog } from "./catalog";

export const CatalogContent = ({ title, catalogData }: Props) => {
	return (
		<section>
			<Carousel className="space-y-15">
				<Groups className="flex-row justify-between gap-5 items-center">
					<h2 className="text-3xl font-bold text-white">{title}</h2>

					<Groups className="bg-black-06 rounded-xl p-4 gap-3 flex-row items-center">
						<CarouselPrevious
							className="static rounded-none translate-0"
							color="black"
							variant="icon"
						/>

						<CarouselDots />
						<CarouselNext
							className="static rounded-none translate-0"
							color="black"
							variant="icon"
						/>
					</Groups>
				</Groups>

				<CarouselContent>
					{catalogData.map((item) => (
						<CarouselItem key={item.id} className="basis-1/5">
							<Catalog catalog={item} />
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</section>
	);
};

interface Props {
	title: string;
	catalogData: CatalogType[];
}
