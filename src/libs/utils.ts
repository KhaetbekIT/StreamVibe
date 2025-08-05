import { type ClassValue, clsx } from "clsx";
import dayjs from "dayjs";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const isActive = (pathname: string, href: string) => pathname === href;

export const toMoney = (value: number) =>
	new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
		value,
	);

export const formatViews = (views: number): string => {
	if (views < 1000) return `${views}`;
	if (views < 1_000_000)
		return `${(views / 1000).toFixed(views >= 10_000 ? 0 : 1)}K`;
	return `${(views / 1_000_000).toFixed(views >= 10_000_000 ? 0 : 1)}M`;
};

export const formatDuration = (durationInMinutes: number): string => {
	const hours = Math.floor(durationInMinutes / 60);
	const minutes = durationInMinutes % 60;

	const hoursText = hours > 0 ? `${hours}h` : "";
	const minutesText = minutes > 0 ? `${minutes}min` : "";

	return [hoursText, minutesText].filter(Boolean).join(" ");
};


export const Time = dayjs;