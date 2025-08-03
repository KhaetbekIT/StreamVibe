import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import type { StaticImageData } from "next/image";

export interface Banner {
	id: number;
	image: string | StaticImport | StaticImageData;
	label: string;
	description: string;
}
