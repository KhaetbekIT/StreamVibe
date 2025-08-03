import type { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Video {
	image: string | StaticImport;
	timer: number;
	view: string;
	label: string;
    id: number;
}
