"use client";

import Autoplay from "embla-carousel-autoplay";
import { Play } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/container";
import { Groups } from "@/components/groups";
import { Button } from "@/components/ui/button";
import {
	type CarouselApi,
	CarouselContent,
	CarouselDots,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	Carousel as CarouselWrapper,
} from "@/components/ui/carousel";
import { moviesBannerData } from "@/defaults/movies-banner.data";

export const Carousel = () => {
	const [carouselApi, setCarouselApi] = useState<CarouselApi>();
	const [selectedIndex, setSelectedIndex] = useState(0);
	const pluginRef = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

	useEffect(() => {
		if (!carouselApi) return;

		const onSelect = () => {
			const index = carouselApi.selectedScrollSnap();
			setSelectedIndex(index);
		};

		onSelect();

		return () => {
			carouselApi.off("select", onSelect);
		};
	}, [carouselApi]);

	return (
		<section>
			<Container>
				<CarouselWrapper
					orientation="horizontal"
					plugins={[pluginRef.current]}
					opts={{
						loop: true,
						duration: 50,
						align: "center",
					}}
					setApi={setCarouselApi}
					className="relative overflow-hidden after:content-[''] after:bg-gradient-to-t after:absolute after:-top-1/2 after:left-0 after:right-0 after:bottom-0 after:from-black-06 after:to-black-06/03"
				>
					<CarouselContent>
						{moviesBannerData.map((banner) => (
							<CarouselItem
								key={banner.id}
								className="h-[800px] overflow-hidden"
							>
								<Image
									src={banner.image}
									alt={banner.label}
									className="w-full h-full object-cover object-top"
									width={1920}
									height={1080}
									priority
								/>
							</CarouselItem>
						))}
					</CarouselContent>

					{/* Нижняя панель */}
					<div className="absolute bottom-0 left-0 right-0 space-y-[50px] pb-5 z-10">
						<div className="space-y-2.5 w-[1190px] mx-auto text-center">
							<h2 className="text-4xl font-bold text-white">
								{moviesBannerData[selectedIndex]?.label}
							</h2>

							<p className="text-grey-65">
								{moviesBannerData[selectedIndex]?.description}
							</p>

							<Button variant={"button"} color="red">
								<Play fill="white" />

								<span>Play Now</span>
							</Button>
						</div>
						<Groups className="flex-row justify-between gap-5 items-center px-[50px]">
							<CarouselPrevious
								className="static rounded-none"
								color="black"
								variant="icon"
							/>
							<CarouselDots />
							<CarouselNext
								className="static rounded-none"
								color="black"
								variant="icon"
							/>
						</Groups>
					</div>
				</CarouselWrapper>
			</Container>
		</section>
	);
};
