import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const isActive = (pathname: string, href: string) => pathname === href;

export const toMoney = (value: number) =>
	new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
