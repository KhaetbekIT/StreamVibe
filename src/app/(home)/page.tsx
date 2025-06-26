import Movie1 from "@public/assets/movie1.jpg";
import Movie2 from "@public/assets/movie2.jpg";
import Movie3 from "@public/assets/movie3.jpg";
import Movie4 from "@public/assets/movie4.jpg";
import Movie5 from "@public/assets/movie5.jpg";
import Movie6 from "@public/assets/movie6.jpg";
import Movie7 from "@public/assets/movie7.jpg";
import Movie8 from "@public/assets/movie8.jpg";
import Movie9 from "@public/assets/movie9.jpg";
import Movie10 from "@public/assets/movie10.jpg";
import Movie11 from "@public/assets/movie11.jpg";
import { Router } from "@/configs/router.config";
import type { PageType } from "@/types/type";
import { Banners } from "./_components/banners";
import { Section } from "./_components/section";

const Page: PageType = async () => {
	return (
		<>
			<Banners />

			<Section
				title="Movies"
				href={{
					pathname: Router.pages.category,
					query: { category: "Movies" },
				}}
				items={[
					{
						id: 1,
						title: "Movie 1",
						image: Movie1,
					},

					{
						id: 2,
						title: "Movie 1",
						image: Movie2,
					},

					{
						id: 3,
						title: "Movie 1",
						image: Movie3,
					},

					{
						id: 4,
						title: "Movie 1",
						image: Movie4,
					},

					{
						id: 5,
						title: "Movie 1",
						image: Movie5,
					},

					{
						id: 6,
						title: "Movie 1",
						image: Movie6,
					},
				]}
			/>

			<Section
				title="Series"
				href={{
					pathname: Router.pages.category,
					query: { category: "Series" },
				}}
				items={[
					{
						id: 1,
						title: "Movie 1",
						image: Movie7,
					},

					{
						id: 2,
						title: "Movie 1",
						image: Movie8,
					},

					{
						id: 3,
						title: "Movie 1",
						image: Movie9,
					},

					{
						id: 4,
						title: "Movie 1",
						image: Movie10,
					},

					{
						id: 5,
						title: "Movie 1",
						image: Movie11,
					},
				]}
			/>
		</>
	);
};

export default Page;
