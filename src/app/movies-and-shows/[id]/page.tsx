import { Blocks, Calendar, Languages, Star } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Container } from "@/components/container";
import { Groups } from "@/components/groups";
import { Routers } from "@/configs/routers.config";
import { videosData } from "@/defaults/videos.data";
import { Time } from "@/libs/utils";
import type { PageType } from "@/types/type";
import { Cast } from "./_components/cast";
import { Button } from "@/components/ui/button";

const Page: PageType = async ({ params }) => {
	const { id } = await params;

	if (!id) {
		redirect(Routers.moviesAndShowsPage.to);
	}

	const videoData = videosData.find((video) => video.id === +id);

	return (
		<div className="pt-[120px] pb-[130px]">
			<section>
				<Container>
					<div className="space-y-[100px]">
						<div className="overflow-hidden bg-black-30 h-[835px] relative after:content-[''] after:bg-gradient-to-t after:absolute after:-top-64 after:left-0 after:w-full after:bottom-0 after:from-black-08 after:to-black-08/0">
							<Image
								src={videoData?.image ?? ""}
								alt={videoData?.label ?? "not found"}
								width={1920}
								height={1080}
							/>
							<div className="max-w-[1200px] w-full z-10 absolute bottom-0 left-1/2 -translate-x-1/2 space-y-7 text-center">
								<h2 className="text-3xl font-bold text-white">
									{videoData?.label}
								</h2>

								<p className="text-grey-60">{videoData?.shortDescription}</p>
							</div>
						</div>

						<div className="flex gap-5">
							<div className="w-[1050px] space-y-7">
								<blockquote className="p-[50px] bg-black-10 border border-black-15 rounded-xl space-y-3.5">
									<p className="text-grey-60">Description</p>
									<p className="text-white">{videoData?.description}</p>
								</blockquote>

								<Cast castData={videoData?.actors ?? []} />
							</div>

							<div className="grow p-[50px] bg-black-10 border border-black-15 rounded-xl space-y-[30px]">
								<div className="space-y-3.5">
									<Groups className="text-grey-60 flex-row items-center">
										<Calendar />

										<p>Released Year</p>
									</Groups>

									<time className="text-white">
										{Time(videoData?.releaseDate).format("YYYY")}
									</time>
								</div>

                                <div className="space-y-3.5">
									<Groups className="text-grey-60 flex-row items-center">
										<Languages />

										<p>Available Languages</p>
									</Groups>

									<Groups className="flex-row flex-wrap">
										{
                                            videoData?.languages.map((language, index) => (
                                                <Button color="black" key={index.toString()}>{language}</Button>
                                            ))
                                        }
									</Groups>
								</div>

								<div className="space-y-3.5">
									<Groups className="text-grey-60 flex-row items-center">
										<Star />

										<p>Ratings</p>
									</Groups>

									<p className="text-white">
										{videoData?.ratings}
									</p>
								</div>

								<div className="space-y-3.5">
									<Groups className="text-grey-60 flex-row items-center">
										<Blocks />

										<p>Genres</p>
									</Groups>

									<Groups className="flex-row flex-wrap">
										{
                                            videoData?.genres.map((language, index) => (
                                                <Button color="black" key={index.toString()}>{language}</Button>
                                            ))
                                        }
									</Groups>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</section>
		</div>
	);
};

export default Page;
