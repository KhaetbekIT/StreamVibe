import type {
	StaticImageData,
	StaticImport,
} from "next/dist/shared/lib/get-img-props";

export interface Catalog {
	id: number;
	images: (string | StaticImport | StaticImageData)[];
	label: string;
	isTop: boolean;
}
