"use client";

import Image from "next/image";
import { Groups } from "@/components/groups";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import type { Video } from "@/types/video.type";

export const Cast = ({ castData }: Props) => {
	return (
		<div className="p-[50px] bg-black-10 border border-black-15 rounded-xl">
			<Carousel className="space-y-3.5">
				<Groups className="flex-row items-center gap-3 justify-between">
					<p className="text-grey-60">Cast</p>

					<Groups className="flex-row">
						<CarouselPrevious className="static translate-0" color="white" />
						<CarouselNext className="static translate-0" color="white" />
					</Groups>
				</Groups>

				<CarouselContent>
					{castData.map((cast, index) => (
						<CarouselItem className="basis-1/8" key={index.toString()}>
							<div className="w-[100px] h-[110px] overflow-hidden rounded-lg">
								<Image
									src={cast}
									alt={`cast-${index}`}
									width={100}
									height={110}
									className="object-center object-cover w-full h-full"
								/>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</div>
	);
};

interface Props {
	castData: Video["actors"];
}
