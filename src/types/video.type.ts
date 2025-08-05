import type { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Video {
	image: string | StaticImport;
	timer: number;
	views: number;
	label: string;
    id: number;
	shortDescription: string;
	description: string;
	actors: (string | StaticImport)[];
	releaseDate: Date;
	languages: string[];
	ratings: number;
	genres: string[];
}
