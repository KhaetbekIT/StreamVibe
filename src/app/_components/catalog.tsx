import CatalogImage5 from "@public/assets/icons/gaming.svg";
import CatalogImage4 from "@public/assets/icons/laptop.svg";
import CatalogImage3 from "@public/assets/icons/smart-tv.svg";
import CatalogImage1 from "@public/assets/icons/smartphone.svg";
import CatalogImage2 from "@public/assets/icons/tablet.svg";
import CatalogImage6 from "@public/assets/icons/vr-headset.svg";
import { Container } from "@/components/container";
import { CatalogItem } from "./catalog-item";

const catalogItems = [
	{
		image: CatalogImage1,
		title: "Smartphone",
		description:
			"StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
	},
	{
		image: CatalogImage2,
		title: "Tablet",
		description:
			"StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
	},
	{
		image: CatalogImage3,
		title: "Smart TV",
		description:
			"StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
	},
	{
		image: CatalogImage4,
		title: "Laptop",
		description:
			"StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
	},
	{
		image: CatalogImage5,
		title: "Gaming Console",
		description:
			"StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
	},
	{
		image: CatalogImage6,
		title: "VR Headset",
		description:
			"StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
	},
];

export const Catalog = () => {
	return (
		<section>
			<Container>
				<div className="space-y-15">
					<div className="space-y-2.5">
						<h2 className="text-3xl font-bold text-white">
							We Provide you streaming experience across various devices.
						</h2>

						<p className="text-grey-60">
							With StreamVibe, you can enjoy your favorite movies and TV shows
							anytime, anywhere. Our platform is designed to be compatible with
							a wide range of devices, ensuring that you never miss a moment of
							entertainment.
						</p>
					</div>

					<ul className="grid grid-cols-3 gap-5">
						{catalogItems.map((item) => (
							<li key={item.title}>
								<CatalogItem {...item} />
							</li>
						))}
					</ul>
				</div>
			</Container>
		</section>
	);
};
