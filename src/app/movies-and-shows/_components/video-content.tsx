import { Button } from "@/components/ui/button";
import type { Video } from "@/types/video.type";
import { VideoCart } from "./video-cart";

export const VideoContent = ({ title, videoData }: Props) => {
	return (
		<section className="space-y-15">
			<h2 className="text-3xl font-bold text-white">{title}</h2>

			<div className="grid grid-cols-5 gap-5">
				{videoData.map((video) => (
					<VideoCart key={video.id} videoData={video} />
				))}
			</div>

			<div className="text-center">
				<Button color="red" variant="button">Show More</Button>
			</div>
		</section>
	);
};

interface Props {
	title: string;
	videoData: Video[];
}
