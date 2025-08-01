import { Play } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { homeHeaderData } from "@/defaults/home-header.data";

export const Header = () => {
	const firstItems = homeHeaderData.slice(0, homeHeaderData.length / 3);
	const secondItems = homeHeaderData.slice(
		homeHeaderData.length / 3,
		(homeHeaderData.length / 3) * 2,
	);
	const thirdItems = homeHeaderData.slice((homeHeaderData.length / 3) * 2);

	return (
		<section>
			<div className="relative after:content-[''] after:bg-gradient-to-b after:absolute after:-top-64 after:left-0 after:w-full after:-bottom-[900px] after:from-black-08 after:to-black-08/0 h-[900px] overflow-hidden space-y-2.5">
				<Carousel>
					<CarouselContent className="gap-2.5">
						{firstItems.map((item) => (
							<CarouselItem className="basis-1/9" key={item.id}>
								<div className="h-[200px] overflow-hidden rounded-xl">
									<Image
										src={item.image}
										alt={`${item.id}`}
										width={150}
										height={200}
										className="w-full h-auto"
										priority
									/>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>

				<Carousel>
					<CarouselContent className="gap-2.5">
						{secondItems.map((item) => (
							<CarouselItem className="basis-1/9" key={item.id}>
								<div className="h-[200px] overflow-hidden rounded-xl">
									<Image
										src={item.image}
										alt={`${item.id}`}
										width={150}
										height={200}
										className="w-full h-auto"
										priority
									/>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>

				<Carousel>
					<CarouselContent className="gap-2.5">
						{thirdItems.map((item) => (
							<CarouselItem className="basis-1/9" key={item.id}>
								<div className="h-[200px] overflow-hidden rounded-xl">
									<Image
										src={item.image}
										alt={`${item.id}`}
										width={150}
										height={200}
										className="w-full h-auto"
										priority
									/>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>

				<Carousel>
					<CarouselContent className="gap-2.5">
						{firstItems.map((item) => (
							<CarouselItem className="basis-1/9" key={item.id}>
								<div className="h-[200px] overflow-hidden rounded-xl">
									<Image
										src={item.image}
										alt={`${item.id}`}
										width={150}
										height={200}
										className="w-full h-auto"
										priority
									/>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>

			<div className="-mt-[150px] text-center relative w-[1140px] mx-auto space-y-10">
				<div className="space-y-2.5">
					<h1 className="text-white text-[48px] font-bold">
						The Best Streaming Experience
					</h1>

					<p className="text-grey-60">
						StreamVibe is the best streaming experience for watching your
						favorite movies and shows on demand, anytime, anywhere. With
						StreamVibe, you can enjoy a wide variety of content, including the
						latest blockbusters, classic movies, popular TV shows, and more. You
						can also create your own watchlists, so you can easily find the
						content you want to watch.
					</p>
				</div>

				<Button color="red">
					<Play fill="white" />
					<span>Start Watching Now</span>
				</Button>
			</div>
		</section>
	);
};
