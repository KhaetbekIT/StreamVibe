"use client";

import { Pause, Play } from "lucide-react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const VideoPlayer = ({ path, className, rootClassName }: Props) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null);

	const togglePlay = () => {
		const video = videoRef.current;

		if (!video) return;

		if (isPlaying) {
			video.pause();
		} else {
			video.play();
		}

		setIsPlaying(!isPlaying);
	};

	return (
		<div className={cn("relative", rootClassName)}>
			<video
				ref={videoRef}
				width={1237}
				height={670}
				className={cn("block object-cover h-full w-full", className)}
				src={path}
				loop
				playsInline
			>
				<track
					kind="captions"
					srcLang="en"
					src="captions.vtt"
					label="English"
				/>
				Your browser does not support the video tag.
			</video>

			<button
				type="button"
				onClick={togglePlay}
				className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/30 rounded-full p-4 text-white border border-white"
			>
				{isPlaying ? <Pause /> : <Play />}
			</button>
		</div>
	);
};

interface Props {
	className?: string;
	path: string;
	rootClassName?: string;
}
