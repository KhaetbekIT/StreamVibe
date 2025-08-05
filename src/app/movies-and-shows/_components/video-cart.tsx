import { Clock3, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Groups } from "@/components/groups";
import { Button } from "@/components/ui/button";
import { Routers } from "@/configs/routers.config";
import { formatDuration, formatViews } from "@/libs/utils";
import type { Video } from "@/types/video.type";

export const VideoCart = ({ videoData }: Props) => {
	return (
		<Link
			href={Routers.movieById.to(videoData.id)}
			className="py-[30px] px-5 rounded-xl bg-black-10 space-y-5 group border border-black-15 inline-block"
		>
			<div className="rounded-xl overflow-hidden h-[232px]">
				<Image
					src={videoData.image}
					alt={videoData.label}
					width={245}
					height={280}
					className="object-center object-cover group-hover:scale-105 duration-300 w-full h-full"
				/>
			</div>

			<Groups className="flex-row items-center justify-between gap-1">
				<Button className="text-white rounded-full px-4" variant="icon">
					<Clock3 />

					<span>{formatDuration(videoData.timer)}</span>
				</Button>

				<Button className="text-white rounded-full px-4" variant="icon">
					<Eye />

					<span>{formatViews(videoData.views)}</span>
				</Button>
			</Groups>
		</Link>
	);
};

interface Props {
	videoData: Video;
}
