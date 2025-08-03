import Image1 from "@public/assets/genres/Image-0.jpg";
import Image2 from "@public/assets/genres/Image-1.jpg";
import Image3 from "@public/assets/genres/Image-2.jpg";
import Image4 from "@public/assets/genres/Image-3.jpg";
import Image5 from "@public/assets/genres/Image-4.jpg";
import Image6 from "@public/assets/genres/Image-5.jpg";
import Image7 from "@public/assets/genres/Image-6.jpg";
import Image8 from "@public/assets/genres/Image-7.jpg";
import Image9 from "@public/assets/genres/Image-8.jpg";
import Image10 from "@public/assets/genres/Image-9.jpg";
import Image11 from "@public/assets/genres/Image-10.jpg";
import Image12 from "@public/assets/genres/Image-11.jpg";
import Image13 from "@public/assets/genres/Image-12.jpg";
import Image14 from "@public/assets/genres/Image-13.jpg";
import Image15 from "@public/assets/genres/Image-14.jpg";
import Image16 from "@public/assets/genres/Image-15.jpg";
import Image17 from "@public/assets/genres/Image-16.jpg";
import Image18 from "@public/assets/genres/Image-17.jpg";
import Image19 from "@public/assets/genres/Image-18.jpg";
import Image20 from "@public/assets/genres/Image-19.jpg";
import type { Catalog } from "@/types/catalog.type";

export const genresData: Catalog[] = [
	{
		id: 1,
		images: [Image1, Image2, Image3, Image4],
		label: "Action",
		isTop: false,
	},
	{
		id: 2,
		images: [Image5, Image6, Image7, Image8],
		label: "Adventure",
		isTop: false,
	},
	{
		id: 3,
		images: [Image9, Image10, Image11, Image12],
		label: "Animation",
		isTop: false,
	},
	{
		id: 4,
		images: [Image13, Image14, Image15, Image16],
		label: "Comedy",
		isTop: false,
	},
	{
		id: 5,
		images: [Image17, Image18, Image19, Image20],
		label: "Drama",
		isTop: false,
	},
	{
		id: 6,
		images: [Image9, Image10, Image11, Image12],
		label: "Animation",
		isTop: false,
	},
] as const;
