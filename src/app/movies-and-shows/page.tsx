import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { genresData } from "@/defaults/genres.data";
import { videosData } from "@/defaults/videos.data";
import type { PageType } from "@/types/type";
import { Trial } from "../_components/trial";
import { Banner } from "./_components/banner";
import { CatalogContent } from "./_components/catalog-content";
import { VideoContent } from "./_components/video-content";

const Page: PageType = () => {
	return (
		<div className="space-y-[150px] pt-[120px] pb-[130px]">
			<Banner />

			<Container>
				<div className="p-15 relative border border-black-15 rounded-xl">
					<Button className="absolute top-[-20px] left-15" color="red">
						Movies
					</Button>
					<div className="space-y-16">
						<CatalogContent catalogData={genresData} title="Our Genres" />

						<CatalogContent
							catalogData={genresData.map((item) => ({
								...item,
								isTop: true,
							}))}
							title="Popular Top 10 In Genres"
						/>

						<VideoContent title="Trending Now" videoData={videosData} />
					</div>
				</div>
			</Container>

			<Trial />
		</div>
	);
};

export default Page;
