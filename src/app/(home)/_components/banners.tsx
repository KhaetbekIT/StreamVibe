"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "@/styles/banners.css";
import Banner1 from "@public/assets/banner1.jpg";
import Banner2 from "@public/assets/banner2.jpg";
import Banner3 from "@public/assets/banner3.jpg";
import Banner4 from "@public/assets/banner4.jpg";
import Banner5 from "@public/assets/banner5.jpg";
import Image from "next/image";

export const Banners = () => {
	return (
		<section className="relative py-10 px-4">
			<Swiper
				modules={[Autoplay]}
				spaceBetween={30}
				slidesPerView={4}
				centeredSlides={true}
				loop={true}
				className="swiper-banner"
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
			>
				<SwiperSlide className="banner-slide">
					<Image
						src={Banner1}
						alt="Banner 1"
						width={350}
						height={495}
						priority
						className="w-full h-full object-cover"
					/>
				</SwiperSlide>

				<SwiperSlide className="banner-slide">
					<Image
						src={Banner2}
						alt="Banner 1"
						width={350}
						height={495}
						priority
						className="w-full h-full object-cover"
					/>
				</SwiperSlide>

				<SwiperSlide className="banner-slide">
					<Image
						src={Banner3}
						alt="Banner 1"
						width={350}
						height={495}
						priority
						className="w-full h-full object-cover"
					/>
				</SwiperSlide>

				<SwiperSlide className="banner-slide">
					<Image
						src={Banner4}
						alt="Banner 1"
						width={350}
						height={495}
						priority
						className="w-full h-full object-cover"
					/>
				</SwiperSlide>

				<SwiperSlide className="banner-slide">
					<Image
						src={Banner5}
						alt="Banner 1"
						width={350}
						height={495}
						priority
						className="w-full h-full object-cover"
					/>
				</SwiperSlide>

				<SwiperSlide className="banner-slide">
					<Image
						src={Banner1}
						alt="Banner 1"
						width={350}
						height={495}
						priority
						className="w-full h-full object-cover"
					/>
				</SwiperSlide>
			</Swiper>
		</section>
	);
};
