import Movie1 from "@public/assets/movie1.jpg";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { VideoPlayer } from "@/components/video-player";
import { Router } from "@/configs/router.config";
import { Info } from "./info";

export const Content = () => {
	return (
		<section className="py-10">
			<Container>
				<div className="space-y-10">
					<div className="relative">
						<div className="max-w-[1237px] ml-auto w-full">
							<VideoPlayer path="/assets/video.mp4" />
						</div>

						<div className="absolute top-0 bottom-0 left-0 w-[475px] bg-black/70 px-2 py-10 overflow-hidden">
							<Info title="Tron: Ares | Official Trailer title" />
						</div>
					</div>

					<div className="grid grid-cols-5 gap-10">
						<Link
							href={Router.pages.details(1)}
							className="overflow-hidden rounded-2xl group relative inline-block h-[300px]"
						>
							<Image
								className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
								alt={"movie 1"}
								width={200}
								height={300}
								src={Movie1}
							/>
						</Link>

						<Link
							href={Router.pages.details(1)}
							className="overflow-hidden rounded-2xl group relative inline-block h-[300px]"
						>
							<Image
								className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
								alt={"movie 1"}
								width={200}
								height={300}
								src={Movie1}
							/>
						</Link>

						<Link
							href={Router.pages.details(1)}
							className="overflow-hidden rounded-2xl group relative inline-block h-[300px]"
						>
							<Image
								className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
								alt={"movie 1"}
								width={200}
								height={300}
								src={Movie1}
							/>
						</Link>

						<Link
							href={Router.pages.details(1)}
							className="overflow-hidden rounded-2xl group relative inline-block h-[300px]"
						>
							<Image
								className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
								alt={"movie 1"}
								width={200}
								height={300}
								src={Movie1}
							/>
						</Link>

						<Link
							href={Router.pages.details(1)}
							className="overflow-hidden rounded-2xl group relative inline-block h-[300px]"
						>
							<Image
								className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
								alt={"movie 1"}
								width={200}
								height={300}
								src={Movie1}
							/>
						</Link>
					</div>
				</div>
			</Container>
		</section>
	);
};
