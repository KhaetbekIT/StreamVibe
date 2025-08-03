import { Clock3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Groups } from "@/components/groups";
import { Button } from "@/components/ui/button";
import { Routers } from "@/configs/routers.config";
import { formatDuration } from "@/libs/utils";
import type { Video } from "@/types/video.type";

export const VideoCart = ({ videoData }: Props) => {
	return (
		<Link
			href={Routers.movieById.to(videoData.id)}
			className="py-[30px] px-5 rounded-xl bg-black-10 space-y-5 group"
		>
			<div className="rounded-xl overflow-hidden w-[192px] h-[232px]">
				<Image
					src={videoData.image}
					alt={videoData.label}
					width={100}
					height={120}
					className="object-center object-cover group-hover:scale-105 duration-300"
				/>
			</div>

			<Groups className="flex-row items-center justify-between gap-1">
				<Button color="black" variant="ghost">
					<Clock3 />

					<span>{formatDuration(videoData.timer)}</span>
				</Button>
			</Groups>
		</Link>
	);
};

interface Props {
	videoData: Video;
}
