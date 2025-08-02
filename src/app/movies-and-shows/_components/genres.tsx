"use client";

import { Container } from "@/components/container";
import { Groups } from "@/components/groups";
import {
	Carousel,
	CarouselContent,
	CarouselDots,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

export const Genres = () => {
	return (
		<section>
			<Container>
				<Carousel className="space-y-15">
					<Groups className="flex-row justify-between gap-5 items-center">
						<h2 className="text-3xl font-bold text-white">Our Genres</h2>

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
						<CarouselItem>...</CarouselItem>
						<CarouselItem>...</CarouselItem>
						<CarouselItem>...</CarouselItem>
					</CarouselContent>
				</Carousel>
			</Container>
		</section>
	);
};
