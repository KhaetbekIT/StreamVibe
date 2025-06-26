import Movie1 from "@public/assets/movie1.jpg";
import { Instagram, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Router } from "@/configs/router.config";

export const Content = () => {
	return (
		<section className="py-10">
			<Container>
				<div className="space-y-10">
					<h2 className="text-3xl font-bold text-white">Movies</h2>

					<div className="flex gap-5">
						<p className="grow text-white">
							PlayON online cinema offers more than three thousand films for
							viewing, including new releases and premieres
						</p>

						<div className="space-x-5">
							<Link
								className="inline-block"
								href="https://www.instagram.com/playon.official/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Instagram size={26} />
							</Link>

							<Link
								className="inline-block"
								href="https://www.instagram.com/playon.official/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Twitter size={26} />
							</Link>

							<Link
								className="inline-block"
								href="https://www.instagram.com/playon.official/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Youtube size={26} />
							</Link>
						</div>
					</div>

					<div className="grid grid-cols-5 gap-5">
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

					<div className="text-center">
						<Button className="mx-auto">Load More</Button>
					</div>
				</div>
			</Container>
		</section>
	);
};
